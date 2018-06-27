<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @stack('styles')
</head>
<body>
    <div class="container mt-5">
        <div class="row justify-content-md-center">
            <div class="col-10">
                <div class="card">
                    <div class="card-header bg-primary text-center text-white">
                        <h5>
                            {{ __('Acesso não autorizado') }}
                        </h5>
                    </div>

                    <div class="card-body justify-content-md-center">
                        <div class="row">
                            <div class="col-12 text-center">
                                <h2>401 - Unauthorized!</h2>
                                <h4>Você não tem permissão para acessar a página destino!</h4>
                                <h4>
                                    <a href="{{ route('home') }}">Clique aqui</a> para ir a Home!
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="{{ asset('js/app.js') }}" defer></script>
    @stack('scripts')
</body>
</html>
