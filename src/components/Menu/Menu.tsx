import React, { useEffect, useRef, useState } from "react";
import { MenuRoot, ButtonMenu, DropdownPanel, Option } from "./styled";

export default () => {

    const options: Array<string> = [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4'
    ]

    const [open, setOpen] = useState<boolean>(false)
    const [isAnimated, setAnimated] = useState<boolean>(false)
    const [activeOption, setActiveOtion] = useState<number | null>(null)

    const menuElement = useRef<HTMLDivElement>(null)

    useEffect(() => {
        window.addEventListener('click', onClickOutsideHandler)
        return () => window.removeEventListener('click', onClickOutsideHandler)
    }, [open])

    const onClickOutsideHandler = (event: MouseEvent) => {
        if (open && !menuElement.current.contains(event.target as Node)) {
            hideDropdownPanel()
        }
    }

    const openDropdownPanel = () => {
        setAnimated(true)
        setOpen(true)
    }

    const hideDropdownPanel = () => {
        setAnimated(false)
        setTimeout(() => setOpen(false), 150)
    }

    const onOptionClick = (index: number) => {
        hideDropdownPanel()
        setActiveOtion(index)
    }

    return (
        <MenuRoot ref={menuElement}>
            <ButtonMenu onClick={open ? hideDropdownPanel : openDropdownPanel}>
                OPEN MENU
            </ButtonMenu>
            {open &&
                <DropdownPanel isAnimated={isAnimated}>
                    {options.map((option, index) =>
                        <Option key={option + index} onClick={() => onOptionClick(index)} isActive={index === activeOption}>
                            {option}
                        </Option>
                    )}
                </DropdownPanel>
            }
        </MenuRoot>
    )
}

