import styled, { keyframes } from 'styled-components';

const panelWidth = '300px';

export const PanelButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: rgba(92, 107, 192, 1);
    outline: none;
    border-radius: 4px;
    transition: all 0.2s ease-out;
    padding: 8px 16px;
    color: white;
    box-shadow: 0px 1px 2px 0px rgba(26, 35, 126, 1);
    &:hover {
        background-color: rgba(63, 81, 181, 1);
    }
`;

const show = (isAnimated: boolean) =>
    keyframes({
        from: {
            opacity: isAnimated ? 0 : 1,
        },
        to: {
            opacity: isAnimated ? 1 : 0,
        },
    });

const move = (isAnimated: boolean) =>
    keyframes({
        from: {
            left: isAnimated ? `-${panelWidth}` : '0px',
        },
        to: {
            left: isAnimated ? '0px' : `-${panelWidth}`,
        },
    });

export const PanelContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
`;

export const DarkBackground = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    height: 100%;
    animation: ${({ isAnimated }: { isAnimated: boolean }) => show(isAnimated)}
        0.2s ease-in forwards;
`;

export const PanelLeft = styled.div`
    width: ${panelWidth};
    position: absolute;
    height: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
    z-index: 1;
    animation: ${({ isAnimated }: { isAnimated: boolean }) => move(isAnimated)}
        0.2s ease-in forwards;
`;
