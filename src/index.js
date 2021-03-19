import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { PrimaryButton, SignUpModal } from './components/';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => setIsDarkTheme(true)}>
        Dark theme
      </button>
      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => setIsDarkTheme(false)}>
        Default theme
      </button>
      <PrimaryButton
        style={{ margin: '0 16px' }}
        onClick={() => setShowModal(!showModal)}>
        Show modal
      </PrimaryButton>
      <div
        style={{
          background: isDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: '100vw',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />

        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
