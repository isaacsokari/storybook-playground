import React from 'react';
import ReactDOM from 'react-dom';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Button';
import { GlobalStyle } from './utils';

const App = () => (
  <>
    <PrimaryButton>Hello World!</PrimaryButton>
    <SecondaryButton>Secondary Button!</SecondaryButton>
    <TertiaryButton>Tertiary Button!</TertiaryButton>
    <GlobalStyle />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
