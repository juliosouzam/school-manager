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
                                Visualizar Curso
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
                @if ($course->students->count() > 0)
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
                                    <th>Nome</th>
                                    <th>Matrícula</th>
                                    <th>Semestre</th>
                                    <th>Atualização</th>
                                </thead>
                                <tbody>
                                    @foreach ($course->students as $student)
                                        <tr>
                                            <td>
                                                <a href="{{ route('student.show', $student->id) }}">{{ $student->name }}</a>
                                            </td>
                                            <td>{{ $student->registry }}</td>
                                            <td>{{ $student->semester }}</td>
                                            <td>{{ $student->updated_at->format('d/m/Y H:i') }}</td>
                                            <td>
                                                <a href="{{ route('student.show', $student->id) }}" class="btn btn-sm btn-info">
                                                    <i class="fa fa-fw fa-eye"></i>
                                                </a>
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#modalDeleteStudent-{{ $student->id }}">
                                                    <i class="fa fa-fw fa-trash"></i>
                                                </button>
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
                @endif

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
        position: 'top-end',
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
