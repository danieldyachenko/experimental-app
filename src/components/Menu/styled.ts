import styled, {keyframes} from 'styled-components'

const btnHeight = 30
const btnWidth = 100
const dropdownWidth = 150

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
        background-color: #e0e0e0;
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
    display: flex;
    flex-direction: column;
    width: ${dropdownWidth}px;
    background: #fff;
    position: relative;
    box-shadow: 0px 1px 3px 0px #757575;
    right: ${(dropdownWidth - btnWidth) / 2}px;
    border-radius: 5px;
    padding-bottom: 8px;
    animation: ${({isAnimated}: {isAnimated: boolean}) => show(isAnimated)} 0.15s linear forwards;
    z-index: 1;
    &::after {
      transform: rotate(135deg);
      content: ''; 
      top: -8px;
      position: absolute; 
      align-self: center;
      border-style: solid;
      border-width: 16px 0 0 16px;
      border-color: transparent transparent transparent #fff;
      box-shadow: 1px -1px 3px 0px #757575;
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
    background-color: ${({isActive}: {isActive: boolean}) => isActive ? '#eeeeee' : '#fff'};
    cursor: pointer;
    transition: all 0.2s ease-out;
    &:hover {
      background-color: #eeeeee;
    };
    z-index: 1;
`;



