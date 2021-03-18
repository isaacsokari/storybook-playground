import styled from 'styled-components';

import { defaultTheme, typeScale } from '../utils';

const Button = styled.button`
  border-radius: 2px;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
  font-size: ${typeScale.paragraph};
  min-width: 100px;
  padding: 12px 24px;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: white;
`;

export const SecondaryButton = styled(Button)`
  background-color: white;
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};
`;

export const TertiaryButton = styled(Button)`
  background-color: white;
  border: none;
  color: ${defaultTheme.primaryColor};
`;
