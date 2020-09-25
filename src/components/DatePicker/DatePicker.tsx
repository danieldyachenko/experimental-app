import React, { useEffect, useRef, useState } from 'react'
import { DatePickerInput, DatePickerRoot, DropdownPanel } from './styled'

export default function DatePicker() {

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

    return (
        <>
            <DatePickerRoot>
                <DatePickerInput onClick={openDropdownPanel} />
                {open &&
                    <DropdownPanel isAnimated={isAnimated} ref={datePickerElement} onAnimationEnd={onAnimationEnd}>
                        DropdownPanel
                    </DropdownPanel>
                }
            </DatePickerRoot>
        </>
    )
}