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
            Group::create(['name' => 'Alunos', 'nick' => 'students']);
            Group::create(['name' => 'Cursos', 'nick' => 'courses']);
            Group::create(['name' => 'Usuários', 'nick' => 'users']);
            Group::create(['name' => 'Permissões dos Grupos', 'nick' => 'roles']);
        }

        if (is_null(Permission::first())) {
            Permission::create(['name'=> 'Acesso aos Alunos', 'slug' => 'student.index', 'group_id' => Group::where('nick', 'students')->first()->id]);
            Permission::create(['name'=> 'Salvar Alunos', 'slug' => 'student.store', 'group_id' => Group::where('nick', 'students')->first()->id]);
            Permission::create(['name'=> 'Editar Alunos', 'slug' => 'student.edit', 'group_id' => Group::where('nick', 'students')->first()->id]);
            Permission::create(['name'=> 'Visualizar Alunos', 'slug' => 'student.show', 'group_id' => Group::where('nick', 'students')->first()->id]);
            Permission::create(['name'=> 'Excluir Alunos', 'slug' => 'student.destroy', 'group_id' => Group::where('nick', 'students')->first()->id]);

            Permission::create(['name'=> 'Acesso aos Cursos', 'slug' => 'course.index', 'group_id' => Group::where('nick', 'courses')->first()->id]);
            Permission::create(['name'=> 'Salvar Cursos', 'slug' => 'course.store', 'group_id' => Group::where('nick', 'courses')->first()->id]);
            Permission::create(['name'=> 'Editar Cursos', 'slug' => 'course.edit', 'group_id' => Group::where('nick', 'courses')->first()->id]);
            Permission::create(['name'=> 'Visualizar Cursos', 'slug' => 'course.show', 'group_id' => Group::where('nick', 'courses')->first()->id]);
            Permission::create(['name'=> 'Excluir Cursos', 'slug' => 'course.destroy', 'group_id' => Group::where('nick', 'courses')->first()->id]);

            Permission::create(['name'=> 'Acesso aos Usuários', 'slug' => 'user.index', 'group_id' => Group::where('nick', 'users')->first()->id]);
            Permission::create(['name'=> 'Salvar Usuários', 'slug' => 'user.store', 'group_id' => Group::where('nick', 'users')->first()->id]);
            Permission::create(['name'=> 'Editar Usuários', 'slug' => 'user.edit', 'group_id' => Group::where('nick', 'users')->first()->id]);
            Permission::create(['name'=> 'Visualizar Usuários', 'slug' => 'user.show', 'group_id' => Group::where('nick', 'users')->first()->id]);
            Permission::create(['name'=> 'Excluir Usuários', 'slug' => 'user.destroy', 'group_id' => Group::where('nick', 'users')->first()->id]);

            Permission::create(['name'=> 'Acesso as Permissões', 'slug' => 'role.index', 'group_id' => Group::where('nick', 'roles')->first()->id]);
            Permission::create(['name'=> 'Salvar Permissões', 'slug' => 'role.store', 'group_id' => Group::where('nick', 'roles')->first()->id]);
        }
    }
}
