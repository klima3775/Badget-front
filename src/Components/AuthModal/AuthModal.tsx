import { useState } from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import EyeMascot from '../EyeMascot/EyeMascot';
import FormRegLog from '../FormRegLog/FormRegLog';
import type { RegistrationFormProps } from '../../utils/registerFormInterface';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = (data: RegistrationFormProps) => {
    console.log(isLogin ? 'LOGIN SUCCESS:' : 'REGISTER SUCCESS:', data);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog
        sx={{
          maxWidth: 400,
          width: '90%',
          p: 3,
          borderRadius: 'var(--radius-xl)',
        }}
      >
        <ModalClose />
        <EyeMascot isPasswordVisible={isPasswordVisible} />
        <FormRegLog
          onSubmit={handleSubmit}
          isLogin={isLogin}
          isPasswordVisible={isPasswordVisible}
          onPasswordVisibilityChange={setIsPasswordVisible}
          onToggleMode={() => setIsLogin((prev) => !prev)}
        />
      </ModalDialog>
    </Modal>
  );
}
