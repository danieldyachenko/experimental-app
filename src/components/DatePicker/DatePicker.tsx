import React, { useEffect, useRef, useState } from "react";
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
} from "./styled";
import { FormatDate, Months, OnDayClick, Week } from "./types";

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
    };

    const hideDropdownPanel = () => setAnimated(false);

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
        hideDropdownPanel();
    };

    const formatDate: FormatDate = (date) => {
        let dd: string | number = date.getDate();
        if (dd < 10) dd = "0" + dd;

        let mm: string | number = date.getMonth() + 1;
        if (mm < 10) mm = "0" + mm;

        const yyyy: number = date.getFullYear();

        return dd + "." + mm + "." + yyyy;
    };

    return (
        <DatePickerRoot>
            <DatePickerInput
                onClick={openDropdownPanel}
                value={inputValue}
                readOnly
            />
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
                    <DaysContainer>
                        {days.map((day) =>
                            day >= 1 ? (
                                <Day
                                    key={day}
                                    onClick={() => onDayClick(day)}
                                    selected={day === date.getDate()}
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
