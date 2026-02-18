import Button from '@mui/joy/Button';

export default function ButtonColors() {
  return (
    <Button
      size="lg"
      variant="solid"
      color="success"
      sx={{
        width: 'clamp(160px, 35vw, 220px)', // середина між двома варіантами
        py: 2,
        fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
        borderRadius: '20px',
      }}
    >
      Success
    </Button>
  );
}
