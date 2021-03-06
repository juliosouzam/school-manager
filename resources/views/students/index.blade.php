@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="card">
                    <div class="card-header">
                        <h4 class="m-t-10">
                            Lista de Alunos
                        </h4>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped table-hover table-responsive-sm">
                            <div class="float-right mb-2">
                                @can ('create', \School\Student::class)
                                    <a href="{{ route('student.create') }}" class="btn btn-sm btn-success">
                                        <i class="fa fa-fw fa-plus"></i>
                                        Adicionar
                                    </a>
                                @endcan
                            </div>
                            <thead>
                                <tr>
                                    <th scope="col">Matrícula</th>
                                    <th scope="col">Nome do Aluno</th>
                                    <th scope="col">Curso</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Atualizado em</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($students as $student)
                                    <tr>
                                        <td scope="row">{{ $student->registry }}</td>
                                        <td>{{ $student->name }}</td>
                                        <td>
                                            <a href="{{ route('course.show', $student->course->id) }}">{{ $student->course->name }}</a>
                                        </td>
                                        <td>{{ $student->getStatusName() }}</td>
                                        <td>{{ $student->updated_at->format('d/m/Y H:i') }}</td>
                                        <td>
                                            @can ('view', $student)
                                                <a href="{{ route('student.show', $student->id) }}" class="btn btn-sm btn-info">
                                                    <i class="fa fa-fw fa-eye"></i>
                                                </a>
                                            @endcan
                                            <!-- Button trigger modal -->
                                            @can ('delete', $student)
                                                <button type="button" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#modalDeleteStudent-{{ $student->id }}">
                                                    <i class="fa fa-fw fa-trash"></i>
                                                </button>
                                            @endcan
                                            <!-- Modal -->
                                            <div class="modal fade" id="modalDeleteStudent-{{ $student->id }}" tabindex="-1" role="dialog"aria-labelledby="modalDeleteStudentLabel" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="modalDeleteStudentLabel">Remover curso</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            Deseja realmente remover o aluno <b>{{ $student->name }}</b>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                                            <button type="button" class="btn btn-danger"  onclick="event.preventDefault();document.getElementById('form-destroy-student-{{ $student->id }}').submit();">Sim, quero remover</button>
                                                            <form id="form-destroy-student-{{ $student->id }}" action="{{ route('student.destroy', $student->id) }}" method="post" accept-charset="utf-8">
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
    @if ($students->count() == 0)
    const toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000
    });

    toast({
        type: 'info',
        title: 'Informãção!',
        text: 'Nenhum aluno encontrado!'
    });
    @endif
    </script>
@endpush
