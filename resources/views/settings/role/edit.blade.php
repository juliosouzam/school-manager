@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Grupo <b>{{ $role->name }}</b> </h4>

                        <div class="card-box">
                            <h3 class="card-title">Lista de Permissões para o Grupo:
                                <small>{{ $role->name }}</small>
                            </h3>
                            <p class="card-text"> Listagem de todos as permissões cadastradas do grupo
                                <strong>{{ $role->name }}</strong>.
                            </p>
                            <form role="form" method="POST" action="{{ route('roles.permission.store', $role->id) }}">
                                @csrf
                                <div class="row">
                                    <div class="col-md-4">
                                        <ul class="nav nav-pills nav-stacked list-group" id="permissions" role="tablist">

                                            @foreach ($groups as $group)
                                                <li class="nav-item">
                                                    <a class="nav-link list-group-item" id="{{ $group->nick }}-tab" data-toggle="tab" href="#{{ $group->nick }}" role="tab" aria-controls="{{ $group->nick }}" aria-expanded="true">
                                                        <i class="ti-image"></i> {{ $group->name }}
                                                    </a>
                                                </li>
                                            @endforeach

                                        </ul>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card card-block tab-content p-2">
                                            <h4>
                                                <i class="fa fa-lock"></i>
                                                Poderá realizar...
                                            </h4>
                                            <hr>

                                            @foreach ($groups as $group)
                                                <div role="tabpanel" class="tab-pane fade in" id="{{ $group->nick }}" aria-labelledby="{{ $group->nick }}-tab">

                                                    @foreach ($group->permissions as $permission)
                                                        <div class="checkbox checkbox-info">
                                                            <input id="checkbox-signup-{{ $permission->id }}" name="slug[]" {{ (!$role->permissions->where('slug', $permission->slug)->isEmpty()) ? 'checked':'' }} type="checkbox" value="{{ $permission->id }}">

                                                            <label for="checkbox-signup-{{ $permission->id }}">
                                                                {{ $permission->name }}
                                                            </label>
                                                        </div>
                                                    @endforeach
                                                </div>
                                            @endforeach

                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 mt-5">
                                        <a href="{{ route('roles.index') }}" class="btn btn-secondary">Cancelar</a>
                                        <button type="submit" class="btn btn-success">
                                            <i class="fa fa-save"></i> Salvar
                                        </button>
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
    @include('partials.messagers_sweetalert')
@endpush
