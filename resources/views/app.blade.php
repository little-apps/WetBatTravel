<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <link rel="stylesheet" href="{{ mix('/css/app.css') }}" type="text/css" nonce="{{ csp_nonce() }}">
    </head>
    <body>
        <div id="root"></div>

        <script src="{{ mix('/js/index.js') }}" nonce="{{ csp_nonce() }}"></script>
        <script src="{{ mix('/js/manifest.js') }}" nonce="{{ csp_nonce() }}"></script>
        <script src="{{ mix('/js/vendor.js') }}" nonce="{{ csp_nonce() }}"></script>
    </body>
</html>
