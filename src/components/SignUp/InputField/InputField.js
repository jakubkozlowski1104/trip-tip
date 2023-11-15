import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledInputField, HoverInfo, IconName } from './InputField.styles';

const InputField = ({
  placeholder,
  type,
  name,
  onChange,
  icon,
  infoContent,
  canSignUp,
}) => {
  return (
    <StyledInputField>
      <HoverInfo content={infoContent}>
        <IconName canSignUp={canSignUp}>
          <FontAwesomeIcon icon={icon} />
        </IconName>
      </HoverInfo>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
      />
      <div className='icon'>
        <FontAwesomeIcon icon={icon} />
      </div>
    </StyledInputField>
  );
};

export default InputField;
