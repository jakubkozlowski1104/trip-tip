import React from 'react';
import { StyledContainer } from './Message.styles';

const Message = ({ content, onClose }) => {
  return (
    <StyledContainer>
      <p>{content}</p>
      <button onClick={onClose}>Close</button>
    </StyledContainer>
  );
};

export default Message;
