import React, { useEffect, useState } from 'react';

const DEFAULT_AVATAR = 'https://ui-avatars.com/api/?name=U&background=fec702&color=fff&rounded=true';

const UserAvatar = () => {
  const [avatar, setAvatar] = useState(DEFAULT_AVATAR);

  useEffect(() => {
    const saved = localStorage.getItem('userAvatar');
    if (saved) setAvatar(saved);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      setAvatar(base64);
      localStorage.setItem('userAvatar', base64);
    };

    if (file) reader.readAsDataURL(file);
  };

  return (
    <div className="avatar-wrapper">
      <label htmlFor="upload-avatar">
        <img
          src={avatar}
          alt="avatar"
          className="user-avatar"
        />
      </label>
      <input
        id="upload-avatar"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default UserAvatar;
