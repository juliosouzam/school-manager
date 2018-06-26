@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="card">
                    <div class="card-header bg-info">
                        <div class="float-left">
                            <h4 class="m-t-10 text-white">
                                Adicionar curso
                            </h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <form action="{{ route('course.store') }}" class="form-horizontal" role="form" method="POST">
                            @csrf
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-md-12">
                                                <b>Cód. Curso:</b>
                                            </label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" name="cod_course" value="{{ old('cod_course') }}" placeholder="Código do curso">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-md-12">
                                                <b>Nome:</b>
                                            </label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" name="name" value="{{ old('name') }}" placeholder="Nome do curso">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group row">
                                            <label class="control-label text-left col-md-12">
                                                <b>Instituição:</b>
                                            </label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" name="institution" value="{{ old('institution') }}" placeholder="Instituição de ensino">
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
    <script src="{{ asset('vendor/js/jquery.js') }}" charset="utf-8"></script>
    {{-- <script src="https://code.jquery.com/jquery-3.3.1.min.js" charset="utf-8"></script> --}}
    <script src="{{ asset('vendor/sweetalert2/sweetalert2.min.js') }}" charset="utf-8"></script>

    <script type="text/javascript">
    @if (session('error'))
    swal({
        type: 'error',
        title: 'Oops...',
        text: '{{ session('error') }}',
    });
    @endif

    @if (session('status'))
    swal({
        type: 'success',
        title: 'Sucesso!',
        text: '{{ session('status') }}',
    });
    @endif

    @if ($errors->any())
    swal({
        type: 'error',
        title: 'Ops...',
        html: '@php
        foreach ($errors->all() as $error) {
            echo $error .'<br>';
        }
        @endphp',
    });
    @endif
    </script>
    @endpush
