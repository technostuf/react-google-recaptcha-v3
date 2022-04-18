import './App.css';
import GoogleRecaptchaComponent from './GoogleRecaptchaComponent';

import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

function App() {
  return (
    <div className="App">
      <GoogleReCaptchaProvider reCaptchaKey="[Your recaptcha key]">
        <GoogleRecaptchaComponent />
      </GoogleReCaptchaProvider>
    </div>
  );
}

export default App;
