@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-10">
                                <h4>Lista de Grupos / Permissões</h4>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <table class="table table-sm-responsive table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    @can ('role.store')
                                        <th>Ações</th>
                                    @endcan
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($roles as $role)
                                    <tr>
                                        <td>{{ $role->name }}</td>
                                        @can ('role.store')
                                            <td>
                                                <a href="{{ route('roles.permission', $role->id) }}" class="btn btn-sm btn-info">
                                                    <i class="fa fa-fw fa-lock"></i>
                                                    Permissões
                                                </a>
                                            </td>
                                        @endcan
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
