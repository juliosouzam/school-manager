<?php

namespace School\Http\Controllers;

use School\Http\Requests\StoreStudentRequest;
use School\Http\Requests\UpdateStudentRequest;
use School\Student;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('view', Student::class);

        $students = Student::all();

        return view('students.index', compact('students'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->authorize('create', Student::class);

        return view('students.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(StoreStudentRequest $request, Student $student)
    {
        $this->authorize('create', $student);

        $request = $request->only(['name', 'registry', 'course_id', 'semester', 'status']);
        $student->fill($request);

        if (!$student->save()) {
            return redirect()->back()->with('error', 'Aluno não pôde ser adicionado!');
        }

        return redirect()->route('student.show', $student->id)->with('status', 'Aluno adicionado com sucesso!');
    }

    /**
     * Display the specified resource.
     *
     * @param \School\Student $student
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        $this->authorize('view', $student);

        return view('students.show', compact('student'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \School\Student $student
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $student)
    {
        $this->authorize('update', $student);

        return view('students.edit', compact('student'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \School\Student          $student
     *
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateStudentRequest $request, Student $student)
    {
        $this->authorize('update', $student);

        $request = $request->only(['name', 'registry', 'course_id', 'semester', 'status']);

        if (!$student->update($request)) {
            return redirect()->back()->with('error', 'Aluno não pôde ser atualizado!');
        }

        return redirect()->route('student.show', $student->id)->with('status', "Aluno {$student->name}, atualizado com sucesso!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \School\Student $student
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        $this->authorize('delete', $student);
        $name = $student->name;

        if (!$student->delete()) {
            return redirect()->back()->with('error', "Aluno $name, não pôde ser excluído!");
        }

        return redirect()->back()->with('status', "Aluno $name, excluído com sucesso!");
    }
}
