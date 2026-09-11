import React from 'react'

export function LogoIcon({ className = "w-8 h-8", size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="27" height="27" rx="7" stroke="#F59E0B" strokeWidth="2.5" fill="#090A0C"/>
      <path
        d="M9.5 16.5L14 21L22.5 11.5"
        stroke="#FFFFFF"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LogoImage({ className = "w-8 h-8 rounded-lg object-contain", alt = "TwoTeamAI Logo" }) {
  return (
    <img
      src="/logo.png"
      alt={alt}
      className={className}
      width="32"
      height="32"
    />
  )
}
