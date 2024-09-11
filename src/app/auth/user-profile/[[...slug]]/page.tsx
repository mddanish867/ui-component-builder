import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { UserCircle, LogOut } from 'lucide-react';
import { isAuthenticated, getUserFromToken, removeToken } from '@/app/utils/clientAuth';

interface UserToken  {
    name?: string;
    email?: string;
    profileImage?: string;
  }

const UserProfileComponent: React.FC = () => {
  const [user, setUser] = useState<UserToken | null>(null);

  useEffect(() => {
    const fetchUserData = () => {
      if (isAuthenticated()) {
        const userData = getUserFromToken();
        setUser(userData);
      } 
    };

    fetchUserData();
  }, []);

  const handleSignOut = () => {
    removeToken();
    setUser(null);
  };

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow rounded-lg">
      <div className="relative w-12 h-12 rounded-full overflow-hidden">
        {user.profileImage ? (
          <Image 
            src={user.profileImage} 
            alt={user.name || 'User'} 
            layout="fill" 
            objectFit="cover"
          />
        ) : (
          <UserCircle className="w-full h-full text-gray-400" />
        )}
      </div>
      <div>
        <h2 className="text-lg font-semibold">{user.name || 'User'}</h2>
        <p className="text-sm text-gray-600">{user.email || 'No email provided'}</p>
      </div>
      <button
        onClick={handleSignOut}
        className="ml-auto flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      >
        <LogOut size={18} />
        <span>Sign Out</span>
      </button>
    </div>
  );
};

export default UserProfileComponent;