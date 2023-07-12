import { useState } from 'react';
import './sendEmail.css';
import ValidEmail from '../components/ValidEmail';

function SendEmail() {
  const [email, setEmail] = useState('');
  const [saveEmail, setSaveEmail] = useState('');

  const handleSendEmail = () => {
    setSaveEmail(email);
    setEmail('');
  };

  return (
    <div className="App">
      <div className="form-container">
        <label htmlFor="id-email">
          Email:
          <input
            id="id-email"
            type="email"
            onChange={ (e) => setEmail(e.target.value) }
            value={ email }
          />
        </label>
        <input
          id="btn-send"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ handleSendEmail }
        />
        <input
          id="btn-back"
          type="button"
          value="Voltar"
          onClick={ () => setSaveEmail('') }
        />
      </div>
      <ValidEmail email={ saveEmail } />
    </div>
  );
}

export default SendEmail;
