<?php

namespace School\Http\Controllers;

use Illuminate\Http\Request;
use School\Role;
use School\Group;

class SettingController extends Controller
{
    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        $this->authorize('view', \School\Role::class);
        $roles = Role::all();

        return view('settings.role.index', compact('roles'));
    }

    /**
    * Show the form for creating a new resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function create()
    {
        //
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function store(Request $request, Role $role)
    {
        $this->authorize('create', $role);

        $role->permissions()->sync($request->input('slug') ?? []);

        return redirect()->back()->with('status', 'Permissões atualizadas com sucesso!');
    }

    public function permissions(Role $role)
    {
        $this->authorize('view', $role);

        if (!auth()->user()->role->isAdmin()) {
            return redirect()->back()->with('warning', 'Você não é Administrador!');
        }

        if (auth()->user()->role_id === $role->id) {
            return redirect()->back()->with('warning', 'Você é Administrador!');
        }

        $groups = Group::get();

        return view('settings.role.edit', compact('role', 'groups'));
    }

    /**
    * Display the specified resource.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function show($id)
    {
        //
    }

    /**
    * Show the form for editing the specified resource.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function edit($id)
    {
        //
    }

    /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function update(Request $request, $id)
    {
        //
    }

    /**
    * Remove the specified resource from storage.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function destroy($id)
    {
        //
    }
}
