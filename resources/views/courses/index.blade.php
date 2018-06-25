@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">Lista de Cursos</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        <table class="table table-striped table-hover">
                            <div class="float-right mb-2">
                                <a href="#" class="btn btn-sm btn-success">
                                    <i class="fa fa-fw fa-plus"></i>
                                    Adicionar
                                </a>
                            </div>
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Cód. Curso</th>
                                    <th scope="col">Nome do Curso</th>
                                    <th scope="col">Instituição Ens.</th>
                                    <th scope="col">Atualizado em</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($courses as $course)
                                    <tr>
                                        <th scope="row">{{ $course->id }}</th>
                                        <td>{{ $course->cod_course }}</td>
                                        <td>{{ $course->name }}</td>
                                        <td>{{ $course->institution }}</td>
                                        <td>
                                            <a href="{{ route('course.show', $course->id) }}" class="btn btn-sm btn-info">
                                                <i class="fa fa-fw fa-eye"></i>
                                            </a>
                                            <a href="#" class="btn btn-sm btn-danger">
                                                <i class="fa fa-fw fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
