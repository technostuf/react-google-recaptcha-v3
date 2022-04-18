import './App.css';
import GoogleRecaptchaComponent from './GoogleRecaptchaComponent';

import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

function App() {
  return (
    <div className="App">
      <GoogleReCaptchaProvider reCaptchaKey="6Lf2Q4AfAAAAAL-dSamsXVZYF3SaAThLS8UAV97o">
        <GoogleRecaptchaComponent />
      </GoogleReCaptchaProvider>
    </div>
  );
}

export default App;
