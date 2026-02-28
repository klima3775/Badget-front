import { useState } from 'react';
import backgroundImage from '../../assets/BacgroundAuth.png';
import AuthBtn from '../../Components/AuthBtn/AuthBtn';
import AuthModal from '../../Components/AuthModal/AuthModal';
import Boy from '../../Components/Boy/Boy';
import s from './Auth.module.scss';

function Auth() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      className={s.authPage}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={s.authContainer}>
        <Boy />
      </div>
      <div className={s.authButtons}>
        <AuthBtn label="Sign In" onClick={() => setModalOpen(true)} />
      </div>
      <AuthModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default Auth;
