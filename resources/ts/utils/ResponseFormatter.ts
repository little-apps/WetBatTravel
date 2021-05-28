import { AxiosResponse } from "axios";

export type FormatterCallback<T = any> = (response: AxiosResponse<T>) => string | null;

export default class ResponseFormatter {
    private formattersStack: FormatterCallback[];
    private fallbackFormatters: FormatterCallback[];

    /**
     * The message to be displayed after all formatter callbacks returned null.
     *
     * @type {string}
     * @memberof ResponseFormatter
     */
    public defaultMessage: string;

    /**
     * Creates an instance of ResponseFormatter.
     *
     * @param {FormatterCallback[]} [formatters=[]] Formatters (empty array by default)
     * @param {FormatterCallback[]} [fallbackFormatters=[]] Fallback formatters (empty array by default)
     * @memberof ResponseFormatter
     */
    constructor(formatters: FormatterCallback[] = [], fallbackFormatters: FormatterCallback[] = []) {
        this.formattersStack = formatters;
        this.fallbackFormatters = fallbackFormatters;
        this.defaultMessage = 'An unknown error occurred. Please try again.';
    }

    /**
     * Gets the default formatters.
     *
     * @readonly
     * @static
     * @type {FormatterCallback[]}
     * @memberof ResponseFormatter
     */
    public static get defaultResponseFormatter(): ResponseFormatter {
        const formatters: FormatterCallback[] = [];

        formatters.push((response) => response.status === 401 ? 'You are not authorized to perform this action.' : null);
        formatters.push((response) => response.status === 500 ? 'An error occurred contacting the website. Please try again.' : null);

        formatters.push((response) => {
            if (response.status === 422) {
                for (const p in response.data.errors) {
                    if (response.data.errors.hasOwnProperty(p)) {
                        const errors = response.data.errors[p];
                        if (errors[0])
                            return errors[0];
                    }
                }
            }
            return null;
        });

        formatters.push((response) => response.data.message ? response.data.message : null);

        return new ResponseFormatter([], formatters);
    }

    /**
     * Adds formatter callback.
     *
     * @param {FormatterCallback} formatter Callback that returns either string or null (if it doesn't know how to handle it).
     * @memberof ResponseFormatter
     */
    public addFormatter(formatter: FormatterCallback) {
        this.formattersStack.push(formatter);
    }

    /**
     * Adds a formatter for the specified status code(s).
     *
     * @param {(number|number[])} statusCodes
     * @param {FormatterCallback} formatter
     * @memberof ResponseFormatter
     */
    public addFormatterForStatusCode(statusCodes: number|number[], formatter: FormatterCallback) {
        const statusCodesAry = typeof statusCodes === 'number' ? [statusCodes] : statusCodes;

        this.formattersStack.push((response) => statusCodesAry.includes(response.status) ? formatter(response) : null);
    }

    /**
     * Adds formatter callbacks.
     *
     * @param {FormatterCallback[]} formatters
     * @memberof ResponseFormatter
     */
    public addFormatters(formatters: FormatterCallback[]) {
        for (const formatter of formatters) {
            this.addFormatter(formatter);
        }
    }

    /**
     * Adds fallback formatter (called after all other formatters returned null)
     *
     * @param {FormatterCallback} formatter Callback that returns either string or null (if it doesn't know how to handle it).
     * @memberof ResponseFormatter
     */
    public addFallbackFormatter(formatter: FormatterCallback) {
        this.fallbackFormatters.push(formatter);
    }

    /**
     * Adds failback formatter callbacks.
     *
     * @param {FormatterCallback[]} formatters
     * @memberof ResponseFormatter
     */
    public addFallbackFormatters(formatters: FormatterCallback[]) {
        for (const formatter of formatters) {
            this.addFallbackFormatter(formatter);
        }
    }

    /**
     * Determines message from response.
     *
     * @param {*} response
     * @returns {string}
     * @memberof ResponseFormatter
     */
    public parse(response?: AxiosResponse): string {
        if (response !== undefined) {
            // Treat callbacks as stack
            const stack = Array.from(this.formattersStack).reverse();
            const fallbacks = Array.from(this.fallbackFormatters);

            // Merge arrays by placing fallbacks after formatters
            for (const formatter of stack.concat(fallbacks)) {
                const message = formatter(response);
                if (message !== null)
                    return message;
            }
        }

        return this.defaultMessage;
    }

    private isAxiosResponse(object: any): object is AxiosResponse {
        return 'data' in object && 'status' in object && 'statusText' in object;
    }
}
