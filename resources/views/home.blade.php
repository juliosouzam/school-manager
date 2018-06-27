@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-10">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <div class="text-center">
                        <h3>Bem vindo ao School Manager!</h3>
                        <p>Aqui, você poderá cadastrar cursos e alunos, visualizar os cursos, dados dos alunos, atualizar registro e se quiser, até deleta-los...<br>
                            <span class="text-danger">
                                <b>
                                    <i class="fa fa-fw fa-lock"></i>
                                    Com autorização...
                                </b>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
