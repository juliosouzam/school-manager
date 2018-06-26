<?php

use Illuminate\Database\Seeder;
use School\Role;
use School\Group;
use School\Permission;

class PermissionsAndRolesSeeder extends Seeder
{
    /**
    * Run the database seeds.
    *
    * @return void
    */
    public function run()
    {
        if (is_null(Role::first())) {
            Role::create([
                'name' => 'Administrador',
                'slug' => 'administrator',
                'type' => 1
            ]);

            Role::create([
                'name' => 'Funcionario',
                'slug' => 'officer',
                'type' => 2
            ]);
        }

        if (is_null(Group::first())) {
            Group::create(['name' => 'Aluno', 'nick' => 'students']);
            Group::create(['name' => 'Cursos', 'nick' => 'courses']);
        }

        if (is_null(Permission::first())) {
            Permission::create(['name'=> 'Acesso Alunos', 'slug' => 'student.index', 'group_id' => Group::where('nick', 'students')->first()->id]);
            Permission::create(['name'=> 'Adicionar Alunos', 'slug' => 'student.create', 'group_id' => Group::where('nick', 'students')->first()->id]);
            Permission::create(['name'=> 'Salvar Alunos', 'slug' => 'student.store', 'group_id' => Group::where('nick', 'students')->first()->id]);
            Permission::create(['name'=> 'Editar Alunos', 'slug' => 'student.edit', 'group_id' => Group::where('nick', 'students')->first()->id]);
            Permission::create(['name'=> 'Visualizar Aluno', 'slug' => 'student.show', 'group_id' => Group::where('nick', 'students')->first()->id]);
            Permission::create(['name'=> 'Atualizar Alunos', 'slug' => 'student.update', 'group_id' => Group::where('nick', 'students')->first()->id]);
            Permission::create(['name'=> 'Excluir Alunos', 'slug' => 'student.destroy', 'group_id' => Group::where('nick', 'students')->first()->id]);

            Permission::create(['name'=> 'Acesso Cursos', 'slug' => 'course.index', 'group_id' => Group::where('nick', 'courses')->first()->id]);
            Permission::create(['name'=> 'Adicionar Cursos', 'slug' => 'course.create', 'group_id' => Group::where('nick', 'courses')->first()->id]);
            Permission::create(['name'=> 'Salvar Cursos', 'slug' => 'course.store', 'group_id' => Group::where('nick', 'courses')->first()->id]);
            Permission::create(['name'=> 'Editar Cursos', 'slug' => 'course.edit', 'group_id' => Group::where('nick', 'courses')->first()->id]);
            Permission::create(['name'=> 'Visualizar Curso', 'slug' => 'course.show', 'group_id' => Group::where('nick', 'courses')->first()->id]);
            Permission::create(['name'=> 'Atualizar Cursos', 'slug' => 'course.update', 'group_id' => Group::where('nick', 'courses')->first()->id]);
            Permission::create(['name'=> 'Excluir Cursos', 'slug' => 'course.destroy', 'group_id' => Group::where('nick', 'courses')->first()->id]);
        }
    }
}
