@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="card">
                    <div class="card-header bg-info">
                        <div class="float-left">
                            <h4 class="m-t-10 text-white">
                                Adicionar aluno
                            </h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <form action="{{ route('student.store') }}" class="form-horizontal" role="form" method="POST">
                            @csrf
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-md-12">
                                                <b>Matrícula:</b>
                                            </label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" name="registry" value="" placeholder="Matrícula do aluno">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-md-12">
                                                <b>Nome:</b>
                                            </label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" name="name" value="" placeholder="Nome do aluno">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-md-12">
                                                <b>Semestre:</b>
                                            </label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" name="semester" value="" placeholder="Semestre">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-md-12">
                                                <b>Status:</b>
                                            </label>
                                            <div class="col-md-12">
                                                <select class="form-control" name="status">
                                                    <option value="">Escolha um...</option>
                                                    <option value="0">Matriculado</option>
                                                    <option value="1">Trancado</option>
                                                    <option value="2">Jubilado</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-md-12">
                                                <b>Curso:</b>
                                            </label>
                                            <div class="col-md-12">
                                                <select class="form-control" name="course_id">
                                                    <option value="">Escolha um...</option>
                                                    @foreach ($courses as $course)
                                                        <option value="{{ $course->id }}">{{ $course->name }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions">
                                <div class="col-12">
                                    <div class="float-right">
                                        <button type="submit" class="btn btn-success" name="button">
                                            <i class="fa fa-pencil"></i>
                                            Enviar
                                        </button>
                                        <a href="{{ route('student.index') }}" class="btn btn-secondary">
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
