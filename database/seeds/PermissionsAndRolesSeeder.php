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
            Group::create(['name' => 'Configurações de Grupos', 'nick' => 'roles']);
        }

        if (is_null(Permission::first())) {
            Permission::create(['name'=> 'Acesso aos Alunos', 'slug' => 'student.index', 'group_id' => Group::where('nick', 'students')->first()->id]);
            Permission::create(['name'=> 'Adicionar Alunos', 'slug' => 'student.create', 'group_id' => Group::where('nick', 'students')->first()->id]);
            Permission::create(['name'=> 'Salvar Alunos', 'slug' => 'student.store', 'group_id' => Group::where('nick', 'students')->first()->id]);
            Permission::create(['name'=> 'Editar Alunos', 'slug' => 'student.edit', 'group_id' => Group::where('nick', 'students')->first()->id]);
            Permission::create(['name'=> 'Visualizar Alunos', 'slug' => 'student.show', 'group_id' => Group::where('nick', 'students')->first()->id]);
            Permission::create(['name'=> 'Atualizar Alunos', 'slug' => 'student.update', 'group_id' => Group::where('nick', 'students')->first()->id]);
            Permission::create(['name'=> 'Excluir Alunos', 'slug' => 'student.destroy', 'group_id' => Group::where('nick', 'students')->first()->id]);

            Permission::create(['name'=> 'Acesso aos Cursos', 'slug' => 'course.index', 'group_id' => Group::where('nick', 'courses')->first()->id]);
            Permission::create(['name'=> 'Adicionar Cursos', 'slug' => 'course.create', 'group_id' => Group::where('nick', 'courses')->first()->id]);
            Permission::create(['name'=> 'Salvar Cursos', 'slug' => 'course.store', 'group_id' => Group::where('nick', 'courses')->first()->id]);
            Permission::create(['name'=> 'Editar Cursos', 'slug' => 'course.edit', 'group_id' => Group::where('nick', 'courses')->first()->id]);
            Permission::create(['name'=> 'Visualizar Cursos', 'slug' => 'course.show', 'group_id' => Group::where('nick', 'courses')->first()->id]);
            Permission::create(['name'=> 'Atualizar Cursos', 'slug' => 'course.update', 'group_id' => Group::where('nick', 'courses')->first()->id]);
            Permission::create(['name'=> 'Excluir Cursos', 'slug' => 'course.destroy', 'group_id' => Group::where('nick', 'courses')->first()->id]);

            Permission::create(['name'=> 'Acesso aos Usuários', 'slug' => 'user.index', 'group_id' => Group::where('nick', 'users')->first()->id]);
            Permission::create(['name'=> 'Adicionar Usuários', 'slug' => 'user.create', 'group_id' => Group::where('nick', 'users')->first()->id]);
            Permission::create(['name'=> 'Salvar Usuários', 'slug' => 'user.store', 'group_id' => Group::where('nick', 'users')->first()->id]);
            Permission::create(['name'=> 'Editar Usuários', 'slug' => 'user.edit', 'group_id' => Group::where('nick', 'users')->first()->id]);
            Permission::create(['name'=> 'Visualizar Usuários', 'slug' => 'user.show', 'group_id' => Group::where('nick', 'users')->first()->id]);
            Permission::create(['name'=> 'Atualizar Usuários', 'slug' => 'user.update', 'group_id' => Group::where('nick', 'users')->first()->id]);
            Permission::create(['name'=> 'Excluir Usuários', 'slug' => 'user.destroy', 'group_id' => Group::where('nick', 'users')->first()->id]);

            Permission::create(['name'=> 'Acesso aos Grupos', 'slug' => 'role.index', 'group_id' => Group::where('nick', 'roles')->first()->id]);
            Permission::create(['name'=> 'Adicionar Grupos', 'slug' => 'role.create', 'group_id' => Group::where('nick', 'roles')->first()->id]);
            Permission::create(['name'=> 'Salvar Grupos', 'slug' => 'role.store', 'group_id' => Group::where('nick', 'roles')->first()->id]);
            Permission::create(['name'=> 'Editar Grupos', 'slug' => 'role.edit', 'group_id' => Group::where('nick', 'roles')->first()->id]);
            Permission::create(['name'=> 'Visualizar Grupos', 'slug' => 'role.show', 'group_id' => Group::where('nick', 'roles')->first()->id]);
            Permission::create(['name'=> 'Atualizar Grupos', 'slug' => 'role.update', 'group_id' => Group::where('nick', 'roles')->first()->id]);
            Permission::create(['name'=> 'Excluir Grupos', 'slug' => 'role.destroy', 'group_id' => Group::where('nick', 'roles')->first()->id]);
        }
    }
}
