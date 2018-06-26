@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">Lista de Cursos</div>
                    <div class="card-body">
                        <table class="table table-striped table-hover">
                            <div class="float-right mb-2">
                                <a href="{{ route('course.create') }}" class="btn btn-sm btn-success">
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
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($courses as $course)
                                    <tr>
                                        <th scope="row">{{ $course->id }}</th>
                                        <td>{{ $course->cod_course }}</td>
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
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                                            <button type="button" class="btn btn-danger"  onclick="event.preventDefault();document.getElementById('form-destroy-course-{{ $course->id }}').submit();">Sim, quero remover</button>
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
    </script>
@endpush
