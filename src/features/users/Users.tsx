import React from "react"
import UserList from "./UserList"
import { Link } from "react-router-dom"

export default function Users() {
    return (
        <div className="flex flex-col gap-2 p-4 h-screen bg-slate-100">
            <div className="rounded-md border border-slate-200 min-h-20 flex items-center p-4">
                <Link to="/" className="flex items-center bg-slate-200 p-2 rounded-sm hover:bg-slate-300 gap-2">
                    <i className="ri-door-open-line"></i>
                    <p>Salir</p>
                </Link>
            </div>
            <div className="rounded-md border border-slate-100 p-4 grow bg-slate-200">
                <UserList />
            </div>
        </div>
    )
}