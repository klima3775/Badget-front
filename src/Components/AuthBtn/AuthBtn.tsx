import Button from '@mui/joy/Button';
import type { ColorPaletteProp } from '@mui/joy';

interface AuthBtnProps {
  label: string;
  onClick?: () => void;
  color?: ColorPaletteProp;
  variant?: 'solid' | 'soft' | 'outlined' | 'plain';
  type?: 'button' | 'submit';
}

export default function AuthBtn({
  label,
  onClick,
  color = 'success',
  variant = 'solid',
  type = 'button',
}: AuthBtnProps) {
  return (
    <Button
      type={type}
      size="lg"
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{
        width: 'clamp(160px, 35vw, 220px)',
        py: 2,
        fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
        borderRadius: '20px',
      }}
    >
      {label}
    </Button>
  );
}
