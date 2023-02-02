import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import useUser from '../stores/user';

const Navbar = () => {
  const logout = useUser((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout('jenkins');
    navigate('/');
  };

  return (
    <div className="h-16 border-b w-full flex justify-end items-center p-2 mb-6">
      <Button variant="text" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Navbar;
