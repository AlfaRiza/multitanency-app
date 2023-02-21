<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ImageController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function index(): Response
    {
        return Inertia::render('Report/index');
    }
}
