import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

type AxiosCreatedCallback = (instance: AxiosInstance, method: HttpMethod) => void;
export type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

export default class Request {
    public readonly baseUrl: string;
    private axiosCreatedCallbacks: AxiosCreatedCallback[];

    /**
     * Creates an instance of Api.
     * @memberof Request
     */
    constructor() {
        this.baseUrl = API_URL;

        this.axiosCreatedCallbacks = [];
    }

    /**
     * Builds URL using string of arrays, string, or multiple string arguments.
     *
     * @param {(string[]|string)} parts
     * @param {...string[]} args
     * @returns {string}
     * @memberof Request
     */
    public static buildUrl(parts: string[]|string, ...args: string[]): string {
        let joined = "";

        if (args.length > 0) {
            if (typeof parts === "string") {
                parts = [parts];
            }

            joined = [...parts, ...args].join("/");
        } else {
            joined = parts instanceof Array ? parts.join("/") : parts;
        }

        return joined;
    }

    /**
     * Creates Axios instance.
     *
     * @param {HttpMethod} method Method to use (GET, POST, etc.)
     * @param {object} [customConfig] Any other configuration to be set.
     * @returns {AxiosInstance}
     * @memberof Request
     */
    public createAxiosInstance(method: HttpMethod, customConfig?: AxiosRequestConfig): AxiosInstance {
        const instance: AxiosInstance = axios.create({
            baseURL: this.baseUrl,
            ...customConfig
        });

        this.axiosCreatedCallbacks.forEach((cb) => cb(instance, method));

        return instance;
    }

    /**
     * Adds a callback that is fired whenever a new AxiosInstance is created.
     *
     * @param {axiosCreatedCallback} callback
     * @returns {() => void} Callback to unsubscribe.
     * @memberof Request
     */
    public onAxiosInstanceCreated(callback: AxiosCreatedCallback): () => void {
        this.axiosCreatedCallbacks.push(callback);

        return () => this.axiosCreatedCallbacks = this.axiosCreatedCallbacks.filter((cb) => cb !== callback);
    }

    /**
     * Creates a new AxiosInstance and performs a GET request.
     *
     * @param {string} url URL to get.
     * @param {object} [params] Any parameters to include in GET request.
     * @memberof Request
     */
    public get<T = any>(url: string, params?: object) {
        const instance = this.createAxiosInstance("get");

        return instance.get<T>(url, { params });
    }

    /**
     * Creates a new AxiosInstance and performs a POST request.
     *
     * @param {string} url URL to send post to.
     * @param {object} params Any parameters to include in POST request.
     * @memberof Request
     */
    public post<T = any>(url: string, params: object) {
        const instance = this.createAxiosInstance("post");

        return instance.post<T>(url, params);
    }

    /**
     * Creates a new AxiosInstance and performs a PUT request.
     *
     * @param {string} url URL to send put to.
     * @param {object} params Any parameters to include in PUT request.
     * @memberof Request
     */
    public put<T = any>(url: string, params: object) {
        const instance = this.createAxiosInstance("put");

        return instance.put<T>(url, params);
    }

    /**
     * Creates a new AxiosInstance and performs a DELETE request.
     *
     * @param {string} url URL to send delete to.
     * @param {object} [params] Any parameters to include in DELETE request.
     * @memberof Request
     */
    public delete<T = any>(url: string, params?: object) {
        const instance = this.createAxiosInstance("delete");

        return instance.delete<T>(url, { params });
    }
}
