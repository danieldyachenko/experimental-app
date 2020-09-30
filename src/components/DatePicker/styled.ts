import styled, { keyframes } from 'styled-components';
import arrowRight from '../../assets/keyboard_arrow_right.svg';
import arrowLeft from '../../assets/keyboard_arrow_left.svg';

const inputHeight = 30;
const inputWidth = 180;
const dropdownWidth = 300;
const shadow = '0px 2px 6px 2px rgba(117,117,117, 0.4)';
const errorColor = '#e57373';

export const DatePickerRoot = styled.div`
    height: ${inputHeight}px;
    width: ${inputWidth}px;
`;

export const DatePickerInput = styled.input<{ open: boolean; error: boolean }>`
    outline: none;
    font-size: 14px;
    height: ${inputHeight}px;
    width: ${inputWidth}px;
    box-sizing: border-box;
    border: 1px solid ${({ open, error }) =>
        error ? errorColor : open ? '#64b5f6' : '#e0e0e0'};
    &:hover {
        border-color: ${({ error }) => (error ? errorColor : '#64b5f6')};
    };
    transition: all 0.3s ease 0s;
    padding 0 8px;
    border-radius: 3px;
`;

const show = (isAnimated: boolean) => keyframes`
  from {
    transform: scale(${isAnimated ? 0.5 : 1});
    top: ${isAnimated ? -100 : 20}px;
    opacity: ${isAnimated ? 0 : 1};
  }

  to {
    transform: scale(${isAnimated ? 1 : 0.5});
    top: ${isAnimated ? 20 : -100}px;
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
    animation: ${({ isAnimated }: { isAnimated: boolean }) => show(isAnimated)}
        0.15s cubic-bezier(0.42, 0, 1, 1) forwards;
    z-index: 1;
    height: 310px;
    padding: 8px;
`;

export const Top = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`;

type PaginationBtnProps = {
    direction: 'left' | 'right';
};

export const PaginationBtn = styled.button<PaginationBtnProps>`
    outline: none;
    border: none;
    background-color: #ffffff;
    background-image: url(${({ direction }) =>
        direction === 'left'
            ? arrowLeft
            : direction === 'right' && arrowRight});
    background-repeat: no-repeat;
    background-position: center center;
    height: 40px;
    width: 40px;
    box-sizing: border-box;
    padding: 0;
    border-radius: 50%;
    transition: all 0.3s ease 0s;
    &:hover {
        background-color: #eeeeee;
    }
`;

export const CurrentDateTitle = styled.div`
    flex-grow: 1;
    text-align: center;
`;

export const WeeksContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin: 10px 0;
`;

export const WeekText = styled.div`
    color: #9e9e9e;
    font-size: 0.8em;
    text-align: center;
    box-sizing: border-box;
`;

export const DaysContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const Day = styled.div<{ selected: boolean }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;

    ${props => !props.selected && `&:hover {background-color: #eeeeee;}`}
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    box-sizing: border-box;
    background-color: ${props => (props.selected ? '#1976d2' : 'transparent')};
    color: ${props => (props.selected ? 'white' : 'balck')};
    cursor: pointer;
`;

export const EmptyDay = styled.div`
    width: 40px;
    height: 40px;
    margin: 0 auto;
`;

export const Error = styled.div`
    position: absolute;
    color: ${errorColor};
`;
