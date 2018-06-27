<?php

namespace School\Http\Controllers;

use Illuminate\Http\Request;
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
        return view('settings.profile.create');
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
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
        //
    }
}
