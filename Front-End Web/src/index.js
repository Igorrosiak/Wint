import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { SignUpView } from './views/signUp/signUpView';
import { SignInView } from './views/signIn/signInView';
import { ProfileView } from './views/myProfile/profileView';
import { EditProfileView } from './views/profile/editProfileView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/registro" element={<SignUpView/>} />
      <Route path="/" element={<SignInView/>} />
      <Route path="/edit-profile" element={<EditProfileView/>} />
      <Route path="/perfil" element={<ProfileView/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* TESTE */