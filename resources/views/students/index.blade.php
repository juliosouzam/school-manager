@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">Lista de Alunos</div>
                    <div class="card-body">
                        <table class="table table-striped table-hover">
                            <div class="float-right mb-2">
                                <a href="{{ route('student.create') }}" class="btn btn-sm btn-success">
                                    <i class="fa fa-fw fa-plus"></i>
                                    Adicionar
                                </a>
                            </div>
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome do Aluno</th>
                                    <th scope="col">Curso</th>
                                    <th scope="col">Matrícula</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($students as $student)
                                    <tr>
                                        <th scope="row">{{ $student->id }}</th>
                                        <td>{{ $student->name }}</td>
                                        <td>
                                            <a href="{{ route('course.show', $student->course->id) }}">{{ $student->course->name }}</a>
                                        </td>
                                        <td>{{ $student->registry }}</td>
                                        <td>{{ $student->getStatusName() }}</td>
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
