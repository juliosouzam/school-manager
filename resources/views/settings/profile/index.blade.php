@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-10">
                                <h4>Lista de usuários</h4>
                            </div>
                            @if (auth()->user()->role->isAdmin())
                                <div class="col-2">
                                    <a href="{{ route('profile.create') }}" class="btn btn-success btn-sm">
                                        <i class="fa fa-fw fa-plus"></i>
                                        Adicionar usuário
                                    </a>
                                </div>
                            @endif
                        </div>
                    </div>

                    <div class="card-body">
                        <table class="table table-sm-responsive table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Grupo</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($users as $user)
                                    <tr>
                                        <td>{{ $user->name }}</td>
                                        <td>{{ $user->email }}</td>
                                        <td>{{ $user->role->name }}</td>
                                        <td>
                                            <a href="{{ route('profile.edit', $user->id) }}" class="btn btn-sm btn-warning">
                                                <i class="fa fa-fw fa-edit"></i>
                                            </a>
                                            <!-- Button trigger modal -->
                                            <button type="button" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#modalDeleteUser-{{ $user->id }}">
                                                <i class="fa fa-fw fa-trash"></i>
                                            </button>

                                            <!-- Modal -->
                                            <div class="modal fade" id="modalDeleteUser-{{ $user->id }}" tabindex="-1" role="dialog" aria-labelledby="modalDeleteUserLabel-{{ $user->id }}" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="modalDeleteUserLabel-{{ $user->id }}">Deletar usuário</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            Deseja realmente deletar esse usuário: <b>{{ $user->name }}</b>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                                            <button type="button" class="btn btn-danger"  onclick="event.preventDefault();document.getElementById('form-destroy-user-{{ $user->id }}').submit();">Sim, quero</button>
                                                            <form id="form-destroy-user-{{ $user->id }}" action="{{ route('profile.destroy', $user->id) }}" method="post" accept-charset="utf-8">
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
@endpush
