@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="card">
                    <div class="card-header">
                        <h4 class="m-t-10">
                            Lista de Cursos
                        </h4>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped table-hover table-responsive-sm">
                            <div class="float-right mb-2">
                                <a href="{{ route('course.create') }}" class="btn btn-sm btn-success">
                                    <i class="fa fa-fw fa-plus"></i>
                                    Adicionar
                                </a>
                            </div>
                            <thead>
                                <tr>
                                    <th scope="col">Cód. Curso</th>
                                    <th scope="col">Nome do Curso</th>
                                    <th scope="col">Instituição Ens.</th>
                                    <th scope="col">Atualizado em</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($courses as $course)
                                <tr>
                                    <td scope="row">{{ $course->cod_course }}</td>
                                    <td>{{ $course->name }}</td>
                                    <td>{{ $course->institution }}</td>
                                    <td>{{ $course->updated_at->format('d/m/Y H:i') }}</td>
                                    <td>
                                        <a href="{{ route('course.show', $course->id) }}" class="btn btn-sm btn-info">
                                            <i class="fa fa-fw fa-eye"></i>
                                        </a>
                                        <!-- Button trigger modal -->
                                        <button type="button" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#modalDeleteCourse-{{ $course->id }}">
                                            <i class="fa fa-fw fa-trash"></i>
                                        </button>
                                        <!-- Modal -->
                                        <div class="modal fade" id="modalDeleteCourse-{{ $course->id }}" tabindex="-1" role="dialog"aria-labelledby="modalDeleteCourseLabel" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="modalDeleteCourseLabel">Remover curso</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        Deseja realmente remover o curso de <b>{{ $course->name }}</b>
                                                        <h4><p>Aviso! Será deletado todos os alunos vinculado a esse curso.</p></h4>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                                        <button type="button" class="btn btn-danger" onclick="event.preventDefault();document.getElementById('form-destroy-course-{{ $course->id }}').submit();">Sim, quero remover</button>
                                                        <form id="form-destroy-course-{{ $course->id }}" action="{{ route('course.destroy', $course->id) }}" method="post" accept-charset="utf-8">
                                                            @csrf
                                                            @method('DELETE')
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                        @if (!empty($courses))
                        {{ $courses->render() }}
                        @endif
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

    <script type="text/javascript">
        @if ($courses->count() == 0)
        const toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000
        });

        toast({
            type: 'info',
            title: 'Informãção!',
            text: 'Nenhum curso encontrado!'
        });
        @endif
    </script>
@endpush
