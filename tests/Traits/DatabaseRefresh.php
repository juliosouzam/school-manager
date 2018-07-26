<?php

namespace Tests\Traits;

use Illuminate\Foundation\Testing\RefreshDatabase;

trait DatabaseRefresh
{
    use  RefreshDatabase;

    protected function refreshInMemoryDatabase()
    {
        $this->artisan('migrate', [
            '--seed' => true
        ]);

        $this->app[Kernel::class]->setArtisan(null);
    }
}
