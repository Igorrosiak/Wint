package com.example.wint;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void abrirCadastro(View v){
        Intent intent = new Intent(getApplicationContext(), CadastrarActivity.class);
        startActivity(intent);
    }

    public void abrirFeed(View v){
        Intent intent = new Intent(getApplicationContext(), FeedActivity.class);
        startActivity(intent);
    }
}