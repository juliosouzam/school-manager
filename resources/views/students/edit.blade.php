@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="card">
                    <div class="card-header bg-warning">
                        <div class="float-left">
                            <h4 class="m-t-10 text-white">
                                <i class="fa fa-fw fa-edit"></i>
                                Editar Aluno
                            </h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <form action="{{ route('student.update', $student->id) }}" class="form-horizontal" role="form" method="POST">
                            @csrf
                            @method('PUT')
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-4">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-12">
                                                <b>Matrícula:</b>
                                            </label>
                                            <div class="col-12">
                                                <input type="text" class="form-control" name="registry" value="{{ old('registry') ?? $student->registry }}" placeholder="Matrícula do aluno">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4 align-self-start">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-12">
                                                <b>Curso:</b>
                                            </label>
                                            <div class="col-12">
                                                <select class="form-control" name="course_id">
                                                    <option value="">Escolha um...</option>
                                                    @foreach ($courses as $course)
                                                        <option value="{{ $course->id }}" {{ ((old('course_id') && old('course_id') == $course->id) || $student->course_id == $course->id) ? 'selected':'' }}>{{ $course->name }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-12">
                                                <b>Nome:</b>
                                            </label>
                                            <div class="col-12">
                                                <input type="text" class="form-control" name="name" value="{{ old('name') ?? $student->name }}" placeholder="Nome do aluno">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-12">
                                                <b>Status:</b>
                                            </label>
                                            <div class="col-12">
                                                <select class="form-control" name="status">
                                                    <option value="">Escolha um...</option>
                                                    <option value="0" {{ ((old('status') && old('status') == 0) || $student->status == 0) ? 'selected':'' }}>Matriculado</option>
                                                    <option value="1" {{ ((old('status') && old('status') == 1) || $student->status == 1) ? 'selected':'' }}>Trancado</option>
                                                    <option value="2" {{ ((old('status') && old('status') == 2) || $student->status == 2) ? 'selected':'' }}>Jubilado</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-12">
                                                <b>Semestre:</b>
                                            </label>
                                            <div class="col-12">
                                                <input type="text" class="form-control" name="semester" value="{{ old('semester') ?? $student->semester }}" placeholder="Semestre">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions">
                                <div class="col-12">
                                    <div class="float-right">
                                        @can ('student.edit')
                                            <button type="submit" class="btn btn-success" name="button">
                                                <i class="fa fa-pencil"></i>
                                                Atualizar
                                            </button>
                                        @endcan
                                        <a href="{{ route('student.show', $student->id) }}" class="btn btn-secondary">
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

@push('styles')
    <link rel="stylesheet" href="{{ asset('vendor/sweetalert2/sweetalert2.min.css') }}">
@endpush

@push('scripts')
    @include('partials.messagers_sweetalert')
@endpush
