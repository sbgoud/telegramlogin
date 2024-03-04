import React, { useState } from 'react';
import TelegramLoginButton from 'react-telegram-login';

const TelegramLogin = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleTelegramResponse = (response) => {
    if (response && response.phone_number) {
      setUser(response);
      setError(null);
    } else {
      setError('Authentication failed. Please try again.');
      setUser(null);
    }
  };

  return (
    <div>
      <h1>Welcome to WebApp</h1>
      {!user ? (
        <TelegramLoginButton
          dataOnauth={handleTelegramResponse}
          botName="bharatfreecloud_bot"
        />
      ) : (
        <div>
          <h2>Hello {user.first_name} {user.last_name}</h2>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default TelegramLogin;
