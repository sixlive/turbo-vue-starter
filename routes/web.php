<?php

Route::get('/', function () {
    return \View::component('Welcome', [
        'welcomeMessage' => 'Greetings.'
    ]);
});
