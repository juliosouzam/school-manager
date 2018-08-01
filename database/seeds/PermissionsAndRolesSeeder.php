<?php

use Illuminate\Database\Seeder;
use School\Group;
use School\Permission;
use School\Role;

class PermissionsAndRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            ['name' => 'Administrador', 'slug' => 'administrator', 'type' => 1],
            ['name' => 'Funcionario', 'slug' => 'officer', 'type' => 2],
        ];
        foreach ($roles as $role) {
            if (is_null(Role::where('slug', $role['slug'])->first())) {
                Role::create($role);
            }
        }

        $groups = [
            ['name' => 'Alunos', 'nick' => 'students'],
            ['name' => 'Cursos', 'nick' => 'courses'],
            ['name' => 'Usuários', 'nick' => 'users'],
            ['name' => 'Permissões dos Grupos', 'nick' => 'roles'],
        ];
        foreach ($groups as $group) {
            if (is_null(Group::where('nick', $group['nick'])->first())) {
                Group::create($group);
            }
        }

        $permissions = [
            ['name'=> 'Acesso aos Alunos', 'slug' => 'student.index', 'group_id' => Group::where('nick', 'students')->first()->id],
            ['name'=> 'Salvar Alunos', 'slug' => 'student.store', 'group_id' => Group::where('nick', 'students')->first()->id],
            ['name'=> 'Editar Alunos', 'slug' => 'student.edit', 'group_id' => Group::where('nick', 'students')->first()->id],
            ['name'=> 'Excluir Alunos', 'slug' => 'student.destroy', 'group_id' => Group::where('nick', 'students')->first()->id],
            ['name'=> 'Acesso aos Cursos', 'slug' => 'course.index', 'group_id' => Group::where('nick', 'courses')->first()->id],
            ['name'=> 'Salvar Cursos', 'slug' => 'course.store', 'group_id' => Group::where('nick', 'courses')->first()->id],
            ['name'=> 'Editar Cursos', 'slug' => 'course.edit', 'group_id' => Group::where('nick', 'courses')->first()->id],
            ['name'=> 'Excluir Cursos', 'slug' => 'course.destroy', 'group_id' => Group::where('nick', 'courses')->first()->id],
            ['name'=> 'Acesso aos Usuários', 'slug' => 'user.index', 'group_id' => Group::where('nick', 'users')->first()->id],
            ['name'=> 'Salvar Usuários', 'slug' => 'user.store', 'group_id' => Group::where('nick', 'users')->first()->id],
            ['name'=> 'Editar Usuários', 'slug' => 'user.edit', 'group_id' => Group::where('nick', 'users')->first()->id],
            ['name'=> 'Excluir Usuários', 'slug' => 'user.destroy', 'group_id' => Group::where('nick', 'users')->first()->id],
            ['name'=> 'Acesso as Permissões', 'slug' => 'role.index', 'group_id' => Group::where('nick', 'roles')->first()->id],
            ['name'=> 'Salvar Permissões', 'slug' => 'role.store', 'group_id' => Group::where('nick', 'roles')->first()->id],
        ];
        foreach ($permissions as $permission) {
            if (is_null(Permission::where('slug', $permission['slug'])->first())) {
                Permission::create($permission);
            }
        }
    }
}
