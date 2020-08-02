import styled, {keyframes} from 'styled-components'

export const PanelButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: none;
    border-radius: 5px;
    transition: all 0.2s ease-out;
    padding: 8px 16px;
    &:hover {
        background-color: #eeeeee;
    }
`;

const show = (isAnimated: boolean) => keyframes`
  from {
   opacity: ${isAnimated ? '0' : '1'};
  }

  to {
    opacity: ${isAnimated ? '1' : '0'};
  }
`;

export const DarkBackground = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    animation: ${({isAnimated}: {isAnimated: boolean}) => show(isAnimated)} 0.15s cubic-bezier(.42, 0, 1, 1) forwards;
`;

export const Panel = styled.div`
  height: 100%;
  width: 300px;
  background-color: #fff;
  0px 0px 15px 0px rgba(117,117,117, 0.4)
  z-index: 1;
`;