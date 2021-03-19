import React from 'react';
import styled from 'styled-components';

import { typeScale } from '../utils';
import { PrimaryButton } from './Button';
import { Illustrations, CloseIcon } from '../assets';

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  background: ${(props) => props.theme.formElementBackground};
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 20px;
  width: 20px;
  padding: 0;
  position: absolute;
  right: 40px;
  top: 40px;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  return (
    <ModalWrapper>
      <img src={Illustrations.SignUp} alt="Sign up for an account!" />
      <SignUpHeader>Sign Up</SignUpHeader>
      <SignUpText>
        Sign up today to get access to all of our content and features!
      </SignUpText>
      <PrimaryButton onClick={() => console.log('You signed up!')}>
        Sign Up!
      </PrimaryButton>
      <CloseModalButton
        aria-label="Close modal"
        onClick={() => setShowModal(false)}>
        <CloseIcon />
      </CloseModalButton>
    </ModalWrapper>
  );
};
