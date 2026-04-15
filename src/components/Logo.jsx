import React from 'react';

const Logo = ({ size = 40 }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 80 48" fill="none">
    <path d="M10 38 Q10 12 30 12 Q30 24 20 24 Q20 36 30 36" stroke="#2DB78A" strokeWidth="5" strokeLinecap="round" fill="none"/>
    <circle cx="20" cy="38" r="4" fill="#2DB78A"/>
    <path d="M34 38 Q34 12 54 12 Q54 24 44 24 Q44 36 54 36" stroke="#1B2E7A" strokeWidth="5" strokeLinecap="round" fill="none"/>
    <circle cx="44" cy="38" r="4" fill="#1B2E7A"/>
    <circle cx="44" cy="12" r="4" fill="#2DB78A"/>
    <path d="M56 24 Q56 8 70 8 L70 38 Q56 38 56 24Z" stroke="#1B2E7A" strokeWidth="5" strokeLinecap="round" fill="none"/>
  </svg>
);

export default Logo;
