<?php

namespace School\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
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
            'name'    => 'required|string',
            'email'   => 'required|string|email|max:255',
            'role_id' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required'    => 'O campo Nome é obrigatório.',
            'email.required'   => 'O campo E-mail é obrigatório.',
            'email.unique'     => 'Esse E-mail já se encontra cadastrado.',
            'role_id.required' => 'O campo Grupo é obrigatório.',
        ];
    }
}
