<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <link rel="stylesheet" href="{{ mix('/css/app.css') }}" type="text/css" nonce="{{ csp_nonce() }}">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    </head>
    <body>
        <div id="root"></div>

        <script src="{{ mix('/js/index.js') }}" nonce="{{ csp_nonce() }}"></script>
        <script src="{{ mix('/js/manifest.js') }}" nonce="{{ csp_nonce() }}"></script>
        <script src="{{ mix('/js/vendor.js') }}" nonce="{{ csp_nonce() }}"></script>
    </body>
</html>
