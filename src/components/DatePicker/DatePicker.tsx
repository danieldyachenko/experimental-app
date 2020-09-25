import React, { useEffect, useRef, useState } from 'react'
import { DatePickerInput, DatePickerRoot, DropdownPanel, PaginationBtn, Top, CurrentDateTitle, WeeksContainer, WeekText } from './styled'
import { Months, Week } from './types'

const months: Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const week: Week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export default function DatePicker() {

    const [date, setDate] = useState<Date>(new Date())
    const [open, setOpen] = useState<boolean>(false)
    const [isAnimated, setAnimated] = useState<boolean>(false)

    const datePickerElement = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const onClickOutsideHandler = (event: MouseEvent) => {
            open && !datePickerElement.current.contains(event.target as Node) && hideDropdownPanel()
        }
        window.addEventListener('click', onClickOutsideHandler)
        return () => window.removeEventListener('click', onClickOutsideHandler)
    }, [open, datePickerElement])

    const openDropdownPanel = () => {
        setAnimated(true)
        setOpen(true)
    }

    const hideDropdownPanel = () => setAnimated(false)

    const onAnimationEnd = () => !isAnimated && setOpen(false)

    const monthAgo = () => setDate(new Date(date.setMonth(date.getMonth() - 1)))

    const monthForward = () => setDate(new Date(date.setMonth(date.getMonth() + 1)))

    return (
        <>
            <DatePickerRoot>
                <DatePickerInput onClick={openDropdownPanel} />
                {open &&
                    <DropdownPanel isAnimated={isAnimated} ref={datePickerElement} onAnimationEnd={onAnimationEnd}>
                        <Top>
                            <PaginationBtn direction='left' onClick={monthAgo} />
                            <CurrentDateTitle>
                                {`${months[date.getMonth()]} ${date.getFullYear()}`}
                            </CurrentDateTitle>
                            <PaginationBtn direction='right' onClick={monthForward} />
                        </Top>
                        <WeeksContainer>
                            {week.map(week => 
                                <WeekText>{week}</WeekText>
                            )}
                        </WeeksContainer>
                    </DropdownPanel>
                }
            </DatePickerRoot>
        </>
    )
}