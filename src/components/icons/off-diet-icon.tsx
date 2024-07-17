interface OffDietIconProps {
  variant: 'light' | 'dark'
}

export function OffDietIcon({ variant }: OffDietIconProps) {
  const color = variant === 'light' ? '#F3BABD' : '#BF3B44'
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
