<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Illuminate\View\Factory as ViewFactory;

class ViewServiceProvider extends ServiceProvider
{
    public function boot()
    {
        ViewFactory::macro('component', function ($name, $data = []) {
            return View::make(
                'app',
                [
                    'name' => $name,
                    'store' => [
                        'user' => auth()->user(),
                        'csrf' => csrf_token(),
                    ],
                    'data' => $data,
                ]
            );
        });
    }
}
