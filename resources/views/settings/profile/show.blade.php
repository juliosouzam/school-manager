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
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                    @endif
                    <form class="form-horizontal" role="form">
                        <div class="form-body">
                            <div class="row">
                                <div class="col-3">
                                    <div class="form-group row">
                                        <label class="control-label text-left col-5" style="margin-right: -30px;">Nome:</label>
                                        <div class="col-7">
                                            <p class="form-control-static">
                                                <b>{{ $user->name }}</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group row">
                                        <label class="control-label text-left col-5" style="margin-right: -30px;">E-mail:</label>
                                        <div class="col-7">
                                            <p class="form-control-static">
                                                <b>{{ $user->email }}</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group row">
                                        <label class="control-label text-left col-5" style="margin-right: -30px;">Grupo:</label>
                                        <div class="col-7">
                                            <p class="form-control-static">
                                                <b>{{ $user->role->name }}</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-actions">
                            <div class="col-12">
                                <div class="float-right">
                                    <a href="{{ route('profile.edit', $user->id) }}" class="btn btn-warning">
                                        <i class="fa fa-fw fa-edit"></i>
                                        Editar
                                    </a>
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
