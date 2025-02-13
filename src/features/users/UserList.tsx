
import { invoke } from '@tauri-apps/api/core';
import React, { useState } from 'react';
import { useEffect } from 'react';

export default function UserList() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    invoke('get_users').then((data: any) => setPeople(data));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Registered Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {people.map((user: any) => (
          <div key={user.id} className="p-4 border rounded-lg shadow">
            <h3 className="font-bold">{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}