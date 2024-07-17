interface OnDietIconProps {
  variant: 'light' | 'dark'
}

export function OnDietIcon({ variant }: OnDietIconProps) {
  const color = variant === 'light' ? '#CBE4B4' : '#639339'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 14 15"
      fill="none"
    >
      <circle cx="7" cy="7.5" r="7" fill={color} />
    </svg>
  )
}
