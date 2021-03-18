import React from 'react';
import ReactDOM from 'react-dom';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Button';

const App = () => <>
  <PrimaryButton>Hello World!</PrimaryButton>
  <SecondaryButton>Secondary Button!</SecondaryButton>
  <TertiaryButton>Tertiary Button!</TertiaryButton>
  </>;

ReactDOM.render(<App />, document.getElementById('root'));
