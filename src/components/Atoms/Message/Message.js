import { StyledContainer } from './Message.styles';
import React, { useState, useEffect } from 'react';

const Message = ({
  content = 'Your message will be checked by an administrator. When it is accepted, your review will be added.',
  onClose,
}) => {
  const [showTimeBar, setShowTimeBar] = useState(false);

  useEffect(() => {
    setShowTimeBar(true);

    const timer = setTimeout(() => {
      setShowTimeBar(false);
      onClose();
    }, 10000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <StyledContainer>
      <p>{content}</p>
      {showTimeBar && <div className='timeBar'></div>}
      <div className='close' onClick={onClose}>
        X
      </div>
    </StyledContainer>
  );
};

export default Message;
