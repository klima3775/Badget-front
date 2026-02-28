import React, { useState } from 'react';
import Stack from '@mui/joy/Stack';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import type { FormProps } from '../../utils/registerFormInterface';

interface FormRegLogProps extends Omit<FormProps, 'onCancel'> {
  onToggleMode: () => void;
}

export default function FormRegLog({
  onSubmit,
  isLogin,
  isPasswordVisible,
  onPasswordVisibilityChange,
  onToggleMode,
}: FormRegLogProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, boolean> = {
      email: !email.trim(),
      password: !password.trim(),
      ...(!isLogin && { token: !token.trim() }),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    const data = {
      email,
      password,
      ...(isLogin ? {} : { token }),
    };

    console.log('Form submitted:', { ...data, isLogin });
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <Typography level="h4" textAlign="center">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </Typography>

        <FormControl error={errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <Typography level="body-xs" color="danger">
              Email is required
            </Typography>
          )}
        </FormControl>

        <FormControl error={errors.password}>
          <FormLabel>Password</FormLabel>
          <Input
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endDecorator={
              <IconButton
                variant="plain"
                size="sm"
                onClick={() =>
                  onPasswordVisibilityChange(!isPasswordVisible)
                }
              >
                {isPasswordVisible ? '🙈' : '👁️'}
              </IconButton>
            }
          />
          {errors.password && (
            <Typography level="body-xs" color="danger">
              Password is required
            </Typography>
          )}
        </FormControl>

        {!isLogin && (
          <FormControl error={errors.token}>
            <FormLabel>Token</FormLabel>
            <Input
              placeholder="Enter your token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            {errors.token && (
              <Typography level="body-xs" color="danger">
                Token is required
              </Typography>
            )}
          </FormControl>
        )}

        <Button type="submit" size="lg" color="success">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </Button>

        <Typography level="body-sm" textAlign="center">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <Typography
            component="span"
            color="primary"
            sx={{ cursor: 'pointer', textDecoration: 'underline' }}
            onClick={onToggleMode}
          >
            {isLogin ? 'Register here' : 'Sign in'}
          </Typography>
        </Typography>
      </Stack>
    </form>
  );
}
