export interface RegistrationFormProps {
  email: string;
  password: string;
  token?: string;
}

export interface FormProps {
  onSubmit: (data: RegistrationFormProps) => void;
  onCancel: () => void;
  isLogin: boolean;
  isPasswordVisible: boolean;
  onPasswordVisibilityChange: (visible: boolean) => void;
}
