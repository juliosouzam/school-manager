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
                <hr>
                <div class="card">
                    <div class="card-header bg-primary">
                        <div class="float-left">
                            <h4 class="m-t-10 text-white">
                                Alunos
                            </h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped table-hover">
                            <thead class="thead-inverse">
                                <th>#</th>
                                <th>Nome</th>
                                <th>Matrícula</th>
                                <th>Semestre</th>
                                <th>Atualização</th>
                            </thead>
                            <tbody>
                                @foreach ($course->students as $student)
                                    <tr>
                                        <td>{{ $student->id }}</td>
                                        <td>{{ $student->name }}</td>
                                        <td>{{ $student->registry }}</td>
                                        <td>{{ $student->semester }}</td>
                                        <td>{{ $student->updated_at->format('d/m/Y H:i') }}</td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
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
    <script src="{{ asset('vendor/sweetalert2/sweetalert2.min.js') }}" charset="utf-8"></script>

    <script type="text/javascript">
    @if (session('error'))
    const toast = swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 4000
    });

    toast({
        type: 'error',
        title: '{{ session('error') }}'
    });
    @endif

    @if (session('status'))
    const toast = swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 4000
    });

    toast({
        type: 'success',
        title: '{{ session('status') }}'
    });
    @endif
    </script>
@endpush
