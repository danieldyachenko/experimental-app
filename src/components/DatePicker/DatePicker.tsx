import React, { useEffect, useRef, useState } from "react";
import formatDate from "./helpers/formatDate";
import validate from "./helpers/validate";
import {
    DatePickerInput,
    DatePickerRoot,
    DropdownPanel,
    PaginationBtn,
    Top,
    CurrentDateTitle,
    WeeksContainer,
    WeekText,
    DaysContainer,
    Day,
    EmptyDay,
    Error,
} from "./styled";
import { InputChange, Months, OnDayClick, OnMouseMove, Week } from "./types";

const months: Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const week: Week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function DatePicker() {
    const [date, setDate] = useState<Date>(new Date());
    const [open, setOpen] = useState<boolean>(false);
    const [isAnimated, setAnimated] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [placeholder, setPlaceholder] = useState<string>("Select date");
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    const datePickerElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onClickOutsideHandler = (event: MouseEvent) => {
            open &&
                !datePickerElement.current.contains(event.target as Node) &&
                hideDropdownPanel();
        };
        window.addEventListener("click", onClickOutsideHandler);
        return () => window.removeEventListener("click", onClickOutsideHandler);
    }, [open, datePickerElement]);

    const openDropdownPanel = () => {
        setAnimated(true);
        setOpen(true);

        if (inputValue && validate(inputValue)) {
            const dateArray = inputValue.split(".");
            const newDate = new Date(
                parseInt(dateArray[2]),
                parseInt(dateArray[1]) - 1,
                parseInt(dateArray[0])
            );
            setDate(newDate);
        }
    };

    const hideDropdownPanel = () => {
        setAnimated(false);
    }

    const onAnimationEnd = () => !isAnimated && setOpen(false);

    const monthAgo = () =>
        setDate(new Date(date.setMonth(date.getMonth() - 1)));

    const monthForward = () =>
        setDate(new Date(date.setMonth(date.getMonth() + 1)));

    const daysInMonth = () =>
        32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();

    const days: Array<number> = [];
    const emptyDaysNumber =
        7 - (7 - new Date(date.getFullYear(), date.getMonth(), 1).getDay());
    for (let i = 1; i <= daysInMonth() + emptyDaysNumber; i++) {
        days.push(i - emptyDaysNumber);
    }

    const onDayClick: OnDayClick = (day) => {
        const selectedDate = new Date(date.getFullYear(), date.getMonth(), day);
        const newInputValue = formatDate(selectedDate);
        setInputValue(newInputValue);
        setDate(selectedDate);
        setSelectedDate(selectedDate);
        hideDropdownPanel();
        setError(false);
    };

    const onMouseMove: OnMouseMove = (day) => {
        const selectedDate = new Date(date.getFullYear(), date.getMonth(), day);
        const newPlaceholderValue = formatDate(selectedDate);
        setPlaceholder(newPlaceholderValue);
    };

    const onMouseLeave = () => {
        setPlaceholder("Select date");
    };

    const datePickerInputChange: InputChange = (event) => {
        if (validate(event.target.value)) {
            const dateArray = event.target.value.split(".");
            const newDate = new Date(
                parseInt(dateArray[2]),
                parseInt(dateArray[1]) - 1,
                parseInt(dateArray[0])
            );
            setSelectedDate(newDate);
            setDate(newDate);
        }
        setInputValue(event.target.value);
    };

    const onBlur = () => {
        if (inputValue && !validate(inputValue)) {
            setError(true);
        } else {
            setError(false);
        }
    }

    return (
        <DatePickerRoot>
            <DatePickerInput
                onClick={openDropdownPanel}
                value={inputValue}
                placeholder={placeholder}
                open={open}
                onChange={datePickerInputChange}
                error={error}
                onBlur={onBlur}
            />
            {error && <Error>Invalid date format.</Error>}
            {open && (
                <DropdownPanel
                    isAnimated={isAnimated}
                    ref={datePickerElement}
                    onAnimationEnd={onAnimationEnd}
                >
                    <Top>
                        <PaginationBtn direction="left" onClick={monthAgo} />
                        <CurrentDateTitle>
                            {`${months[date.getMonth()]} ${date.getFullYear()}`}
                        </CurrentDateTitle>
                        <PaginationBtn
                            direction="right"
                            onClick={monthForward}
                        />
                    </Top>
                    <WeeksContainer>
                        {week.map((week) => (
                            <WeekText key={week}>{week}</WeekText>
                        ))}
                    </WeeksContainer>
                    <DaysContainer onMouseLeave={onMouseLeave}>
                        {days.map((day) =>
                            day >= 1 ? (
                                <Day
                                    key={day}
                                    onClick={() => onDayClick(day)}
                                    selected={
                                        day === selectedDate.getDate() &&
                                        selectedDate.getMonth() ===
                                            date.getMonth()
                                    }
                                    onMouseMove={() => onMouseMove(day)}
                                >
                                    <div>{day}</div>
                                </Day>
                            ) : (
                                <EmptyDay key={day} />
                            )
                        )}
                    </DaysContainer>
                </DropdownPanel>
            )}
        </DatePickerRoot>
    );
}
