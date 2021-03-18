import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { defaultTheme, typeScale } from '../utils';

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
};

const Button = styled.button`
  border-radius: 2px;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
  font-size: ${typeScale.paragraph};
  min-width: 100px;
  margin: 1rem;
  padding: 12px 24px;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${defaultTheme.disabled};
    border: none;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: white;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    border-color: ${defaultTheme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background-color: white;
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:disabled {
    border: 2px solid ${defaultTheme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background-color: white;
  border: none;
  color: ${defaultTheme.primaryColor};

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
