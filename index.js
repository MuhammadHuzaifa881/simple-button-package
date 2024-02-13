import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HomeOutlined } from '@ant-design/icons';

const StyledWrapper = styled.div`
  max-width: 65rem;
  width: 100%;
  margin: 2rem auto;
  padding: 5rem;
  text-align: center;
  background: #fff;
  border: 0.5rem solid #34495e;
`;

const StyledButton = styled.button`
  font-size: 2em;
  color: #fff;
  border: 0.25rem solid #00649E;
  padding: ${props => props.customPadding || '0.85em 0.75em'};
  height: ${props => props.customHeight || 'auto'};
  width: ${props => props.customButtonWidth || 'auto'};
  margin: ${props => props.customMargin || '0.85em 0.75em'};
  margin: 1rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: all 0.35s;
  background: linear-gradient(to right, #00649E, #3498db);
  cursor: pointer;

  &:hover {
    color: #ffffff; /* Custom hover color for the button text */
    background: ${props => props.hoverButtonColor || 'linear-gradient(to right, #005085, #2a4d6e)'}; /* Custom hover color for the button background */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    background: #ecf0f1;
    position: absolute;
    z-index: -1;
    padding: ${props => props.customPadding || '0.85em 0.75em'};
    margin: ${props => props.customMargin || '0.85em 0.75em'};
    display: block;
    transition: all 0.35s;
  }

  .icon {
    margin-right: 0.5em; // Adjust the margin as needed
    color: ${props => props.customIconColor || '#fff'};
    transition: color 0.35s; /* Add a transition for the icon color */
  }

  &:hover .icon {
    color: ${props => props.hoverIconColor || '#ff5733'}; /* Custom hover color for the icons */
  }
`;

const SlideFromTopButton = ({
  antIcon,
  materialIcon,
  faIcon,
  customIconColor,
  prefixIcon,
  suffixIcon,
  children,
  ...props
}) => {
  return (
    <StyledButton {...props}>
      {prefixIcon && (
        <span className="icon">
          {antIcon === 'HomeOutlined' && <HomeOutlined />}
          {materialIcon && <i className="material-icons">{materialIcon}</i>}
          {faIcon && <FontAwesomeIcon icon={faIcon} color={customIconColor} />}
        </span>
      )}
      {children}
      {suffixIcon && (
        <span className="icon">
          {antIcon === 'HomeOutlined' && <HomeOutlined />}
          {materialIcon && <i className="material-icons">{materialIcon}</i>}
          {faIcon && <FontAwesomeIcon icon={faIcon} color={customIconColor} />}
        </span>
      )}
    </StyledButton>
  );
};


const App = () => {
  return (
    <>
    <StyledWrapper>
    <SlideFromTopButton
      // antIcon="HomeOutlined"
      // materialIcon="Home"
      // faIcon="faIcon " 
      customPadding="1em 2em"
      customMargin="1em 2em"
      customHeight="3em"
      customIconColor="#ff5733"
      prefixIcon
      suffixIcon
      hoverIconColor="white"
      hoverButtonColor="linear-gradient(to right, #ff5733, #ff0000)"
      customButtonWidth="600px"
    >
      Simple button
    </SlideFromTopButton>

    </StyledWrapper>
    </>

  );
};

export default App;
