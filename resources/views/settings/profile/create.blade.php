@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-10">
            <div class="card">
                <div class="card-header">
                    <h4>Conta: usuário <b>{{ $user->name }}</b></h4>
                </div>

                <div class="card-body">
                    <form action="{{ route('profile.update', $user->id) }}" method="post" class="form-horizontal" role="form">
                        @csrf
                        @method('PUT')
                        <div class="form-body">
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group row">
                                        <label class="control-label text-left col-5" style="margin-right: -30px;">Nome:</label>
                                        <div class="col-12">
                                            <input class="form-control" type="text" name="name" value="{{ old('name') ?? $user->name }}" placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group row">
                                        <label class="control-label text-left col-5" style="margin-right: -30px;">E-mail:</label>
                                        <div class="col-12">
                                            <input class="form-control" type="email" name="email" value="{{ old('email') ?? $user->email }}" placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group row">
                                        <label class="control-label text-left col-5" style="margin-right: -30px;">Grupo:</label>
                                        <div class="col-12">
                                            @if(auth()->user()->role->isAdmin())
                                            <select name="role_id" class="form-control">
                                                <option value="">Escolha um...</option>
                                                @foreach($groups as $group)
                                                    <option value="{{ $group->id }}" {{ ($group->id == $user->role_id) ? 'selected':'' }}>{{ $group->name }}</option>}
                                                @endforeach
                                            </select>
                                            @else
                                            <p class="form-control-static">
                                                {{ $user->role->name }}
                                            </p>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-actions">
                            <div class="col-12">
                                <div class="float-right">
                                    <button class="btn btn-warning" type="submit">Atualizar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <hr>
            <div class="card">
                <div class="card-header bg-info text-white">
                    <h4>Alterar senha:</h4>
                </div>
                <div class="card-body">
                    <form action="{{ route('profile.update.password', $user->id) }}" class="form-horizontal" method="post" accept-charset="utf-8">
                        @csrf
                        @method('PUT')
                        <div class="form-body">
                            <div class="row">
                                <div class="col-6">
                                    <label class="control-label text-left">Senha:</label>
                                    <input class="form-control" type="password" name="password" value="{{ old('password') }}" placeholder="Senha">
                                </div>
                                <div class="col-6">
                                    <label class="control-label text-left">Confirmar Senha:</label>
                                    <input class="form-control" type="password" name="password_confirmation" value="{{ old('password_confirmation') }}" placeholder="Confirmar senha">
                                </div>
                            </div>
                        </div>
                        <div class="form-actions mt-3">
                            <div class="col-12">
                                <div class="float-right">
                                    <button class="btn btn-info" type="submit">
                                        Alterar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@push('styles')
    <link rel="stylesheet" href="{{ asset('vendor/sweetalert2/sweetalert2.min.css') }}">
@endpush

@push('scripts')
    
    @include('partials.messagers_sweetalert')

@endpush