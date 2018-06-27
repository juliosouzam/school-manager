<?php

namespace School\Http\Controllers;

use Illuminate\Http\Request;
use School\Http\Requests\StoreProfileRequest;
use School\Http\Requests\UpdatePasswordRequest;
use School\User;

class ProfileController extends Controller
{
    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        $this->authorize('user.index');
        $users = User::all();

        return view('settings.profile.index', compact('users'));
    }

    /**
    * Show the form for creating a new resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function create()
    {
        $this->authorize('user.create');

        return view('settings.profile.create');
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function store(StoreProfileRequest $request)
    {
        $this->authorize('user.store');

        $request = $request->only(['name', 'email', 'password', 'role_id']);
        $request['password'] = \Hash::make($request['password']);

        if (!User::create($request)) {
            return redirect()->back()->with('error', 'Não foi possível inserir o novo usuário!');
        }
        return redirect()->back()->with('status', 'Novo usuário cadastrado com sucesso!');
    }

    /**
    * Display the specified resource.
    *
    * @param  int  User $user
    * @return \Illuminate\Http\Response
    */
    public function show(User $user)
    {
        if (auth()->user()->id != $user->id && !auth()->user()->role->isAdmin()) {
            return redirect()->back()->with('error', 'Você não tem permissão de acessar outros usuários!');
        }

        return view('settings.profile.show', compact('user'));
    }

    /**
    * Show the form for editing the specified resource.
    *
    * @param  int  User $user
    * @return \Illuminate\Http\Response
    */
    public function edit(User $user)
    {
        return view('settings.profile.edit', compact('user'));
    }

    /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  int  User $user
    * @return \Illuminate\Http\Response
    */
    public function update(Request $request, User $user)
    {
        $request = $request->only(['name', 'email', 'role_id']);

        if (!$user->update($request)) {
            return redirect()->back()->with('error', 'Erro ao atualizar seu usuário!');
        }

        return redirect()->back()->with('status', 'Seu usuário foi atualizado com sucesso!');
    }

    /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  int  User $user
    * @return \Illuminate\Http\Response
    */
    public function updatePassword(UpdatePasswordRequest $request, User $user)
    {
        $request = $request->only(['password']);
        $password = \Hash::make($request['password']);

        if (!$user->update(['password' => $password])) {
            return redirect()->back()->with('error', 'Erro ao atualizar sua senha!');
        }

        return redirect()->back()->with('status', 'Sua senha foi atualizada com sucesso!');
    }

    /**
    * Remove the specified resource from storage.
    *
    * @param  int  User $user
    * @return \Illuminate\Http\Response
    */
    public function destroy(User $user)
    {
        $this->authorize('user.destroy');

        if ((auth()->user()->id === $user->id && auth()->user()->role->isAdmin()) || auth()->user()->id === $user->id) {
            return redirect()->back()->with('error', 'Você não pôde deletar seu próprio usuário!');
        }

        $name = $user->name;

        if (!$user->delete()) {
            return redirect()->back()->with('error', 'Erro ao deletar esse usuário!');
        }
        return redirect()->back()->with('status', "Usuário {$name}, deletado com sucesso!");
    }
}
