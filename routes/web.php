<?php

Route::get('/', function () {
    return \View::component('Welcome', [
        'welcome_message' => 'Greetings.'
    ]);
});
