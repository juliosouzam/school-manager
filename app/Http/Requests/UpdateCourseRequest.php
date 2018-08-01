<?php

namespace School\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCourseRequest extends FormRequest
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
            'cod_course'  => 'required',
            'name'        => 'required|string',
            'institution' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'cod_course.required'  => 'Campo Cód. Curso é obirgatório!',
            'name.required'        => 'Campo Nome é obirgatório!',
            'name.string'          => 'Campo Nome deve ser uma string!',
            'institution.required' => 'Campo Instituição é obirgatório!',
            'institution.string'   => 'Campo Instituição deve ser uma string!',
        ];
    }
}
