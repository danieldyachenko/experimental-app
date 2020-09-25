import styled, {keyframes} from 'styled-components'

const inputHeight = 30
const inputWidth = 150
const dropdownWidth = 300
const shadow = '0px 0px 15px 0px rgba(117,117,117, 0.4)'
const hoverColor = '#eeeeee'

export const DatePickerRoot = styled.div`
    height: ${inputHeight}px;
    width: ${inputWidth}px; 
`;

export const DatePickerInput = styled.input`

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
    right: ${(dropdownWidth - inputWidth) / 2}px;
    border-radius: 8px;
    padding-bottom: 8px;
    animation: ${({isAnimated}: {isAnimated: boolean}) => show(isAnimated)} 0.15s cubic-bezier(.42, 0, 1, 1) forwards;
    z-index: 1;
    height: 200px;
`;