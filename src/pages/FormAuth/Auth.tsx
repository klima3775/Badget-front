import backgroundImage from '../../assets/BacgroundAuth.png';
import boy from '../../assets/boy.png';
import ButtonColors from '../../Components/AuthBtn/AuthBtn';
import './Auth.scss';

function Auth() {
  return (
    <div
      className="auth-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="auth-container">
        <img src={boy} alt="Boy" />
      </div>
      <div className="auth-buttons">
        <ButtonColors />
      </div>
    </div>
  );
}

export default Auth;
