<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class LoginController extends BaseController
{
    public function store(Request $request)
    {
        User::create([
            'name'      => $request->input('name'),
            'email'     => $request->input('email'),
            'password'  => $request->input('password'),
        ]);

        $data = [
            'status'  => 200,
            'message' => 'Usuário cadastrado com sucesso!',
        ];

        return response()->json($data, 200, $headers = []);
    }

    public function login(Request $request)
    {
        $login = User::where('email', $request->input('email'))
            ->where('password', $request->input('password'))
            ->get();

        $data = [
            'status'  => 401,
            'message' => 'Acesso negado',
        ];

        if (count($login)) {
            $data = [
                'status'  => 200,
                'message' => 'Usuário cadastrado com sucesso!',
            ];
        }

        return response()->json($data, $data['status'], $headers = []);
    }
}
