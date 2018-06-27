@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="card">
                    <div class="card-header bg-info">
                        <div class="float-left">
                            <h4 class="m-t-10 text-white">
                                <i class="fa fa-fw fa-eye"></i>
                                Visualizar Aluno
                            </h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <form action="{{ route('student.store') }}" class="form-horizontal" role="form" method="POST">
                            @csrf
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-4">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-12">
                                                <b>Matrícula:</b>
                                            </label>
                                            <div class="col-12">
                                                <p>{{ $student->registry }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-12">
                                                <b>Curso:</b>
                                            </label>
                                            <div class="col-12">
                                                <p>
                                                    <a href="{{ route('course.show', $student->course->id) }}">{{ $student->course->name }}</a>
                                                </p>
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
                                                <p>{{ $student->name }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-12">
                                                <b>Status:</b>
                                            </label>
                                            <div class="col-12">
                                                <p>{{ $student->getStatusName() }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-12">
                                                <b>Semestre:</b>
                                            </label>
                                            <div class="col-12">
                                                {{ $student->semester }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions">
                                <div class="col-12">
                                    <div class="float-right">
                                        @can ('student.edit')
                                            <a href="{{ route('student.edit', $student->id) }}" class="btn btn-warning">
                                                <i class="fa fa-pencil"></i>
                                                Editar
                                            </a>
                                        @endcan
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
@push('styles')
    <link rel="stylesheet" href="{{ asset('vendor/sweetalert2/sweetalert2.min.css') }}">
@endpush

@push('scripts')
    @include('partials.messagers_sweetalert')
@endpush
