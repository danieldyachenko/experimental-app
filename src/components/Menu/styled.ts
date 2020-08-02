import styled, {keyframes} from 'styled-components'

const btnHeight = 30
const btnWidth = 100
const dropdownWidth = 150
const shadow = '0px 0px 15px 0px rgba(117,117,117, 0.4)'
const hoverColor = '#eeeeee'

export const MenuRoot = styled.div`
    height: ${btnHeight}px;
    width: ${btnWidth}px; 
`;

export const ButtonMenu = styled.button`
    cursor: pointer;
    height: ${btnHeight}px;
    width: ${btnWidth}px;
    border: none;
    background-color: transparent;
    outline: none;
    border-radius: 5px;
    transition: all 0.2s ease-out;
    &:hover {
        background-color: ${hoverColor};
    }
`;

const show = (isAnimated: boolean) => keyframes`
  from {
    transform: scale(${isAnimated ? 0.5 : 1});
    top: ${isAnimated ? -50 : 15}px;
    opacity: ${isAnimated ? 0 : 1};
  }

  to {
    transform: scale(${isAnimated ? 1 : 0.5});
    top: ${isAnimated ? 15 : -50}px;
    opacity: ${isAnimated ? 1 : 0};
  }
`;

export const DropdownPanel = styled.div`
    color: #424242;
    display: flex;
    flex-direction: column;
    width: ${dropdownWidth}px;
    background: #fff;
    position: relative;
    box-shadow: ${shadow};
    right: ${(dropdownWidth - btnWidth) / 2}px;
    border-radius: 8px;
    padding-bottom: 8px;
    animation: ${({isAnimated}: {isAnimated: boolean}) => show(isAnimated)} 0.15s cubic-bezier(.42, 0, 1, 1) forwards;
    z-index: 1;
    &::after {
      transform: rotate(135deg);
      content: ''; 
      top: -5px;
      position: absolute; 
      align-self: center;
      border-style: solid;
      border-width: 16px 0 0 16px;
      border-color: transparent transparent transparent #fff;
      box-shadow: ${shadow};
      z-index: -1;
     };
    &::before {
      content: ''; 
      height: 8px;
      width: 100%;
      background: #fff;
      border-radius: 5px;
     }
`;

export const Option = styled.div`
    text-align: center;
    padding: 8px 16px;
    background-color: ${({isActive}: {isActive: boolean}) => isActive ? hoverColor : '#fff'};
    cursor: pointer;
    transition: all 0.2s ease-out;
    &:hover {
      background-color: ${hoverColor};
    };
    z-index: 1;
`;



