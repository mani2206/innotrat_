import Input from "../baseComponents/Input";
import Button from "../baseComponents/Button";
import Card from "../baseComponents/Card";
import Checkbox from "../baseComponents/CheckBox";
import { useState } from "react";

const LoginPage = ({ onLoginSuccess, onRegisterClick, config }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [error, setError] = useState('');

  // Destructure data from the config prop
  const {
    welcomeIllustrationAlt,
    welcomeTitle,
    welcomeText,
    loginTitle,
    emailInputLabel,
    emailInputPlaceholder,
    passwordInputLabel,
    passwordInputPlaceholder,
    keepLoggedInLabel,
    forgotPasswordLabel,
    loginButtonLabel,
    noAccountText,
    registerButtonLabel
  } = config || {};

const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const correctEmail = 'mani@gmail.com';
    const correctPassword = '1234';

    if (email === correctEmail && password === correctPassword) {
      console.log('Login successful:', { email, password, keepLoggedIn });
      onLoginSuccess(); 
    } else {
      setError('Invalid email/phone or password. Please try again.'); // Set error message
      console.log("Login failed: Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Left Section - Illustration */}
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center bg-purple-50 p-6 rounded-l-lg">
          <div className="text-center">
            <img
              src="https://placehold.co/300x200/E0BBE4/FFFFFF?text=Welcome+Illustration"
              alt={welcomeIllustrationAlt}
              className="max-w-xs mx-auto rounded-md"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/E0BBE4/FFFFFF?text=Image+Error"; }}
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-800 font-inter">{welcomeTitle}</h2>
            <p className="text-gray-600 text-sm mt-2 font-inter">
              {welcomeText}
            </p>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 font-inter">{loginTitle}</h2>
          <form onSubmit={handleSubmit}>
            <Input
              label={emailInputLabel}
              id="email"
              type="text"
              placeholder={emailInputPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label={passwordInputLabel}
              id="password"
              type="password"
              placeholder={passwordInputPlaceholder}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 text-sm gap-2">
              <Checkbox
                label={keepLoggedInLabel}
                id="keepLoggedIn"
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
              />
              <Button label={forgotPasswordLabel} variant="link" onClick={() => console.log('Forgot Password clicked')} />
            </div>
            <Button label={loginButtonLabel} type="submit" variant="primary" className="w-full" />
            <p className="mt-4 text-center text-sm text-gray-600 font-inter">
              {noAccountText}{' '}
              <Button label={registerButtonLabel} variant="link" onClick={onRegisterClick} />
            </p>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;