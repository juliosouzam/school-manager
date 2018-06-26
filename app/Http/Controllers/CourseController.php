<?php

namespace School\Http\Controllers;

use School\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('course.index');
        $courses = Course::latest()->paginate(15);

        return view('courses.index', compact('courses'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->authorize('course.create');

        return view('courses.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $course = new Course;
        $this->authorize('course.store');
        $course->fill($request->all());
        if ($course->save()) {
            return redirect()->route('course.show', $course->id)->with('status', 'Curso adicionado com sucesso!');
        }

        return redirect()->back()->with('error', 'Erro ao adicionar o curso!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \School\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show(Course $course)
    {
        $this->authorize('course.show');

        return view('courses.show', compact('course'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \School\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function edit(Course $course)
    {
        $this->authorize('course.edit');

        return view('courses.edit', compact('course'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \School\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Course $course)
    {
        $this->authorize('course.update');

        $course->update($request->all());

        return redirect()->route('course.show', $course->id)->with('status', 'Curso atualizado com sucesso!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \School\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy(Course $course)
    {
        $this->authorize('course.destroy');

        if ($course->delete()) {
            return redirect()->back()->with('status', 'Curso deletado com sucesso!');
        }

        return redirect()->back()->with('error', 'Curso nao pôde ser deletado!');
    }
}
