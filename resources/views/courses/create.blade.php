@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="card">
                    <div class="card-header bg-info">
                        <div class="float-left">
                            <h4 class="m-t-10 text-white">
                                <i class="fa fa-fw fa-plus"></i>
                                Adicionar Curso
                            </h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <form action="{{ route('course.store') }}" class="form-horizontal" role="form" method="POST">
                            @csrf
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-5">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-12">
                                                <b>Cód. Curso:</b>
                                            </label>
                                            <div class="col-12">
                                                <input type="text" class="form-control" name="cod_course" value="{{ old('cod_course') }}" placeholder="Código do curso">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-7">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-12">
                                                <b>Nome:</b>
                                            </label>
                                            <div class="col-12">
                                                <input type="text" class="form-control" name="name" value="{{ old('name') }}" placeholder="Nome do curso">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-12">
                                                <b>Instituição:</b>
                                            </label>
                                            <div class="col-12">
                                                <input type="text" class="form-control" name="institution" value="{{ old('institution') }}" placeholder="Instituição de ensino">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions">
                                <div class="col-12">
                                    <div class="float-right">
                                        @can ('create', \School\Course::class)
                                            <button type="submit" class="btn btn-success" name="button">
                                                <i class="fa fa-pencil"></i>
                                                Salvar
                                            </button>
                                        @endcan
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

@push('styles')
    <link rel="stylesheet" href="{{ asset('vendor/sweetalert2/sweetalert2.min.css') }}">
@endpush

@push('scripts')
    @include('partials.messagers_sweetalert')
@endpush
