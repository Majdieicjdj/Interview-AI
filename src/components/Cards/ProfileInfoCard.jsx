import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { BASE_URL } from '../../utils/apiPaths';

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate('/');
  };

  // --- SOLUTION ---
  // This logic correctly determines the final image URL.
  let finalImageUrl = '';
  if (user && user.profileImageUrl) {
    // Check if the URL from the database is already a full URL (starts with 'http').
    const isFullUrl = user.profileImageUrl.startsWith('http');

    // If it is, use it directly. Otherwise, build the full URL with BASE_URL.
    finalImageUrl = isFullUrl
      ? user.profileImageUrl
      : `${BASE_URL}${user.profileImageUrl}`;
  }
  // --- END SOLUTION ---

  return (
    user && (
      <div className="flex items-center">
        <img
          src={finalImageUrl} // Use the corrected URL here
          alt="profile"
          className="w-11 h-11 bg-gray-300 rounded-full mr-3 object-cover" // Added 'object-cover' for better image display
        />
        <div>
          <div className="text-[15px] text-black font-bold leading-3">
            {user.name || ''}
          </div>
          <button
            className="text-amber-600 text-sm font-semibold cursor-pointer hover:underline "
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileInfoCard;