import React from 'react';

const Avatar = ({ name, size = 42 }) => {
 
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=1f1f1f&color=ffffff&size=128&rounded=true`;

  return (
    <img
      src={avatarUrl}
      alt={name}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        borderRadius: '50%',
        objectFit: 'cover',
        border: '2px solid #fff',
        cursor: 'pointer',
        transition: '0.2s',
        display: 'block'
      }}
    />
  );
};

export default Avatar;