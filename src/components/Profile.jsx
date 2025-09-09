import React from 'react';
import './Profile.css';
import { useAuth } from '../auth/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../auth/firebase';

const Profile = () => {
  const { user } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="profile-dropdown">
      <div className="profile-info">
        <div className="profile-avatar">
          {user?.photoURL ? (
            <img src={user.photoURL} alt="Profile" />
          ) : (
            <i className="fas fa-user"></i>
          )}
        </div>
        <div className="profile-details">
          <h3>{user?.displayName || user?.email || 'User'}</h3>
          <p>{user?.email}</p>
        </div>
      </div>
      
      <div className="profile-menu">
        <button className="profile-menu-item">
          <i className="fas fa-user-circle"></i>
          My Profile
        </button>
        <button className="profile-menu-item">
          <i className="fas fa-cog"></i>
          Settings
        </button>
        <button className="profile-menu-item">
          <i className="fas fa-history"></i>
          Game History
        </button>
        <button className="profile-menu-item">
          <i className="fas fa-wallet"></i>
          Wallet
        </button>
        <button className="profile-menu-item" onClick={handleSignOut}>
          <i className="fas fa-sign-out-alt"></i>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
