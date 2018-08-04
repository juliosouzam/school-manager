<?php

namespace School\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePasswordRequest extends FormRequest
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
            'password'              => 'required|confirmed|min:6',
            'password_confirmation' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'password.required'              => 'O campo Senha é obrigatório!',
            'password_confirmation.required' => 'O campo Confirmar Senha é obrigatório!',
            'password.confirmed'             => 'Senha e Confirmar Senha, precisam ser iguais!',
            'password.min'                   => 'O campo Senha deve ter no minimo 6 caracteres.',
        ];
    }
}
