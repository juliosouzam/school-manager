<?php

namespace School\Console\Commands;

use Illuminate\Console\Command;

class SchoolInstallCommand extends Command
{
    /**
    * The name and signature of the console command.
    *
    * @var string
    */
    protected $signature = 'school:install';

    /**
    * The console command description.
    *
    * @var string
    */
    protected $description = 'Instala a aplicação School com seus dados de acesso!';

    /**
    * Create a new command instance.
    *
    * @return void
    */
    public function __construct()
    {
        parent::__construct();
    }

    /**
    * Execute the console command.
    *
    * @return mixed
    */
    public function handle()
    {
        $this->comment('Atenção! Ao prosseguir você irá remover todos os dados de instalações anteriores.');

        if (! $this->confirm('Deseja prosseguir?')) {
            $this->error('Operação cancelada pelo usuário!');
            exit(1);
        }

        $this->line('Nesta etapa você criará o primeiro usuário administrador do sistema.');

        $continue = false;

        while (!$continue) {
            $this->info('Informações do Administrador!');
            $name = $this->ask('Informe o nome:');
            $email = $this->ask('Informe também seu e-mail:');
            $password = $this->secret('Agora, uma senha forte:');

            $this->table(['Nome', 'E-mail'], [[$name, $email]]);

            $continue = $this->confirm('Os dados estão corretos?');
        }

        $this->call('key:generate');
        $this->info("1");
        $this->call('migrate:fresh');
        $this->info("2");
        $this->call('migrate', [
            '--seed' => true
        ]);
        $this->info("3");

        \School\User::create([
            'name' => $name,
            'email' => $email,
            'password' => \Hash::make($password),
            'role_id' => 1,
        ]);

        $this->line(sprintf("%s, agora você já pode acessar o sistema com os dados informados.", $name));
        $this->line('Acesse http://localhost/login e informe os dados utilizados nessa etapa.');
        $this->info("Obrigado por usar o School!");
    }
}
