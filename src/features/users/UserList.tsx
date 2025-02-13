
import { invoke } from '@tauri-apps/api/core';
import React, { useState } from 'react';
import { useEffect } from 'react';

interface Employee {
  username: number
  email: string
}

export default function UserList() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Employee[] = await invoke('get_employees')
        setEmployees(data)
      } catch (err) {
        setError(err as string)
      }
    }
    fetchData()
  }, [])

  if (error) return <div>Error: {error}</div>

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Registered Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {employees.map((user, i) => (
          <div key={i} className="p-4 border rounded-lg shadow">
            <h3 className="font-bold">{user.username}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}