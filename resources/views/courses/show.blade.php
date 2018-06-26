@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="card">
                    <div class="card-header bg-info">
                        <div class="float-left">
                            <h4 class="m-t-10 text-white">
                                Informação
                            </h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <form class="form-horizontal" role="form">
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-md-5">Cód. Curso:</label>
                                            <div class="col-md-7">
                                                <p class="form-control-static">
                                                    <b>{{ $course->cod_course }}</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-md-2">Nome:</label>
                                            <div class="col-md-10">
                                                <p class="form-control-static">
                                                    <b>{{ str_limit($course->name, 100) }}</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-md-4">Instituição:</label>
                                            <div class="col-md-7">
                                                <p class="form-control-static">
                                                    <b>{{ $course->institution }}</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions">
                                <div class="col-12">
                                    <div class="float-right">
                                        <a href="{{ route('course.edit', $course->id) }}" class="btn btn-warning">
                                            <i class="fa fa-pencil"></i>
                                            Editar
                                        </a>
                                        <a href="{{ route('course.index') }}" class="btn btn-secondary">
                                            Voltar
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
</div>
@endsection
