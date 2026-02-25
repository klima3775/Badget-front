import backgroundImage from '../../assets/BacgroundAuth.png';
import ButtonColors from '../../Components/AuthBtn/AuthBtn';
import Boy from '../../Components/Boy/Boy';
import s from './Auth.module.scss';

function Auth() {
  return (
    <div
      className={s.authPage}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={s.authContainer}>
        <Boy />
      </div>
      <div className={s.authButtons}>
        <ButtonColors />
      </div>
    </div>
  );
}

export default Auth;
