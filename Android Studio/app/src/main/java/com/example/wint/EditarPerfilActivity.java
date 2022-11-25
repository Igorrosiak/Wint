package com.example.wint;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class EditarPerfilActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_editar_perfil);
    }
    public void voltar(View v) {
        Intent intent = new Intent(getApplicationContext(), MeuPerfil.class);
        startActivity(intent);
    }
}