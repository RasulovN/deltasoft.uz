// components/ui/EmptyIcon.jsx
import React from 'react';
import Lottie from 'lottie-react';

const EmptyIcon = ({ source, size = 150, className }) => {
  return (
    <div className={`flex items-center justify-center mb-5 ${className || ''}`}>
      <Lottie
        animationData={source}
        loop
        autoplay
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default EmptyIcon;
