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
    top: ${isAnimated ? -50 : 5}px;
    opacity: ${isAnimated ? 0 : 1};
  }

  to {
    transform: scale(${isAnimated ? 1 : 0.5});
    top: ${isAnimated ? 5 : -50}px;
    opacity: ${isAnimated ? 1 : 0};
  }
`;

export const DropdownPanel = styled.div`
    width: ${dropdownWidth}px;
    background-color: white;
    position: relative;
    box-shadow: 0px 1px 2px 0px #757575;
    top: 5px;
    right: ${(dropdownWidth - btnWidth) / 2}px;
    border-radius: 5px;
    padding: 8px 0;
    animation: ${({isAnimated}: {isAnimated: boolean}) => show(isAnimated)} 0.15s linear forwards;
`;

export const Option = styled.div`
    text-align: center;
    padding: 8px 16px;
    background-color: ${({isActive}: {isActive: boolean}) => isActive ? '#eeeeee' : 'tranparent'};
    cursor: pointer;
    transition: all 0.2s ease-out;
    &:hover {
      background-color: #eeeeee;
    }
`;

