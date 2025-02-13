import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => navigate('/login'), 2000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex items-center justify-center h-screen bg-slate-200">
           <img src="images/pmlogo.png" alt="logo" className="max-w-96 animate-pulse" />
        </div>
    );
}