import React, { useState } from 'react';
import '../../App.css';
import { useAuth } from './SectionContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

interface FormLoginProps {
  closeModal: () => void;
}

export function FormLogin({ closeModal }: FormLoginProps) {
  const { setLoading, emailError, setEmailError } = useAuth();
  const [hasAttempted, setHasAttempted] = useState(false);
  const [userData, setUserData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setHasAttempted(true);
      setEmailError(error.message);
      setLoading(false);
      return;
    }

    setEmailError("");
    navigate("/inicio");
    closeModal();
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin(userData.email, userData.password);
  };

  const handleFocus = () => {
    setHasAttempted(false);
  };

  return (
    <div className='max-w-5xl md:w-2/3 px-4 py-5 mb-3 bg-white rounded-2xl shadow-lg'>
      <h2 className='text-xl font-bold text-[#1f2937] pl-4 border-l-8 border-[#FC6048]'>BIENVENIDO</h2>
      <form onSubmit={handleSubmit} className="mt-8 gap-7 flex flex-col justify-center">
        <div className="flex flex-col">
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            className={`p-2.5 w-full text-md font-normal shadow-input ${hasAttempted && emailError.length > 0 ? 'bg-red-50 border border-red-500 placeholder-red-700 text-red-700' : 'border-none text-gray-600'}`}
            placeholder="EMAIL"
            required
          />
          {hasAttempted && emailError.length > 0 && (
            <p className="mt-2 text-sm text-red-600">
              <span className="font-medium">Oops!</span> {emailError}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            onFocus={handleFocus}
            className="p-2.5 w-full text-md font-normal shadow-input border-none text-gray-600"
            placeholder="CONTRASEÑA"
            required
          />
        </div>
        <div className="text-sm flex justify-end">
          <a href="#" className="text-gray-400">¿Olvidaste tu contraseña?</a>
        </div>
        <button type="submit" className='py-4 px-8 text-md font-medium rounded-full text-center border-none shadow-button-form' style={{ color: "#ffffff", background: "#4487FF", maxWidth: "200px", margin: "auto" }}>
          INICIAR SESIÓN
        </button>
        <div className="text-sm font-medium text-center text-gray-400">
          AÚN NO TENES CUENTA <a className="text-blue-600 cursor-pointer" onClick={closeModal}>REGISTRARSE</a>
        </div>
      </form>
    </div>
  );
}
