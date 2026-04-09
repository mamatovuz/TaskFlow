import React from 'react';

const Avatar = ({ name, size = 100 }) => {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=1f1f1f&color=FFF&size=${size}&rounded=true`;

  return (
    <img
      src={avatarUrl}
      alt={name}
      width={size}
      height={size}
      style={{
        color: '#ffffff',
        borderRadius: '50%',
        border: '4px solid #ffffff',
        objectFit: 'cover',
      }}
    />
  );
};

export default Avatar;