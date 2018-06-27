<?php

namespace School\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStudentRequest extends FormRequest
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
            'registry' => 'required|integer',
            'name' => 'required|string',
            'course_id' => 'required|integer',
            'semester' => 'required|integer',
            'status' => 'required|integer',
        ];
    }

    public function messages()
    {
        return [
            'registry.required' => 'O campo Matrícula é obrigatório!',
            'registry.integer' => 'O campo Matrícula deve ser um número inteiro, somente!',
            'name.required' => 'O campo Nome é obrigatório!',
            'course_id.required' => 'O campo Curso é obrigatório!',
            'course_id.integer' => 'O campo Curso deve ter um valor escolhido!',
            'semester.required' => 'O campo Semestre é obrigatório!',
            'semester.integer' => 'O campo Semestre deve ser um número inteiro, somente!',
            'status.required' => 'O campo Status é obrigatório!',
            'status.integer' => 'O campo Status deve ter um valor escolhido!',
        ];
    }
}
