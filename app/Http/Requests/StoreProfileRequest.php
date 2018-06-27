<?php

namespace School\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email',
            'role_id' => 'required',
            'password' => 'required|confirmed|min:6',
            'password_confirmation' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'O campo Nome é obrigatório.',
            'email.required' => 'O campo E-mail é obrigatório.',
            'email.email' => 'O campo E-mail deve ter um e-mail válido.',
            'role_id.required' => 'O campo Grupo é obrigatório.',
            'password.required' => 'O campo Senha é obrigatório.',
            'password.confirmed' => 'Senha e Confirmar Senha, precisam ser iguais!',
            'password.min' => 'O campo Senha deve ter no minimo 6 caracteres.',
            'password_confirmation.required' => 'O campo Confirmar Senha é obrigatório.',
        ];
    }
}
