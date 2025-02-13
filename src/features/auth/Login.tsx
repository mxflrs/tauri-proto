import React from "react";
import { Link } from "react-router-dom";
import "../../app/App.css";

export default function Login() {
  return (
    <main className="bg-slate-300 h-screen w-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <img src="images/pmlogo.png" alt="" className="max-w-48 -my-8" />

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Usuario</legend>
          <input type="text" className="input" placeholder="Escribe tu usuario" />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Contrasena</legend>
          <input type="text" className="input" placeholder="Escribe tu contrasena" />
        </fieldset>

        <p className="text-xs pt-6 pb-2">¿No tienes una cuenta? <Link to="/register" className="hover:underline hover:underline-offset-8">Regístrate.</Link></p>
        <Link to="/users" className="btn btn-accent mt-2 text-sm" type="button">Ingresar</Link>
      </div>
    </main>
  );
}