
import { invoke } from '@tauri-apps/api/core';
import React, { useState } from 'react';
import { useEffect } from 'react';

interface Employee {
  username: number
  email: string
}

export default function UserList() {
  const data = [
    {
      id: 1,
      villa: 'Villa Alba',
      nombre: 'María García',
      estado: 'Activo',
      email: 'maria.garcia@example.com',
      telefono: '+34 612 345 678'
    },
    {
      id: 2,
      villa: 'Villa Verde',
      nombre: 'Carlos Martínez',
      estado: 'Inactivo',
      email: 'carlos.m@example.com',
      telefono: '+34 699 876 543'
    },
    {
      id: 3,
      villa: 'Casa del Sol',
      nombre: 'Ana López',
      estado: 'Pendiente',
      email: 'ana.lopez@example.com',
      telefono: '+34 622 334 455'
    },
    {
      id: 4,
      villa: 'Villa Azul',
      nombre: 'Juan Pérez',
      estado: 'Activo',
      email: 'juan.perez@example.com',
      telefono: '+34 677 665 544'
    },
    {
      id: 5,
      villa: 'La Colina',
      nombre: 'Laura Fernández',
      estado: 'Inactivo',
      email: 'laura.f@example.com',
      telefono: '+34 611 223 344'
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Villa</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.villa}</td>
              <td>{item.nombre}</td>
              <td>
                <span className={`badge ${item.estado === 'Activo' ? 'badge-success' :
                  item.estado === 'Inactivo' ? 'badge-error' : 'badge-warning'}`}>
                  {item.estado}
                </span>
              </td>
              <td>{item.email}</td>
              <td>{item.telefono}</td>
              <td>
                <div className="flex gap-2">
                  <button className="btn btn-ghost btn-xs">
                    {/* <PencilIcon className="h-4 w-4" /> */}
                  </button>
                  <button className="btn btn-ghost btn-xs text-error">
                    {/* <TrashIcon className="h-4 w-4" /> */}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}