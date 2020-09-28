import styled, {keyframes} from 'styled-components'
import arrowRight from '../../assets/keyboard_arrow_right.svg'
import arrowLeft from '../../assets/keyboard_arrow_left.svg'

const inputHeight = 30
const inputWidth = 150
const dropdownWidth = 300
const shadow = '0px 2px 6px 0px rgba(117,117,117, 0.4)'
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
    top: ${isAnimated ? -100 : 5}px;
    opacity: ${isAnimated ? 0 : 1};
  }

  to {
    transform: scale(${isAnimated ? 1 : 0.5});
    top: ${isAnimated ? 5 : -100}px;
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
    height: 300px;
    padding: 8px;
`;

export const Top = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`;

type PaginationBtnProps = {
    direction: 'left' | 'right'
}

export const PaginationBtn = styled.button<PaginationBtnProps>`
    outline: none;
    border: none;
    background-color: #ffffff;
    background-image: url(${({direction}) => direction === 'left' ? arrowLeft : direction === 'right' && arrowRight});
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
    };
`;

export const CurrentDateTitle = styled.div`
    flex-grow: 1;
    text-align: center;
`;

//grid-template-columns: auto auto auto auto auto auto auto;
export const WeeksContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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

export const Day = styled.div<{selected: boolean}>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: all 0.3s ease 0s;
    &:hover {
        background-color: #eeeeee;
    };
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    box-sizing: border-box;
    background-color: ${props => props.selected ? '#1976d2' : 'transparent'};
    color: ${props => props.selected ? 'white' : 'balck'}
`;
