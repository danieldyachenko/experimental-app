import React, { useEffect, useRef, useState } from "react";
import { MenuRoot, ButtonMenu, DropdownPanel, Option } from "./styled";

type Options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']

export default function Menu() {

    const options: Options = [
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

        const onClickOutsideHandler = (event: MouseEvent) => {
            open && !menuElement.current.contains(event.target as Node) && hideDropdownPanel()
        }

        window.addEventListener('click', onClickOutsideHandler)

        return () => window.removeEventListener('click', onClickOutsideHandler)
        
    }, [open, menuElement])

    const openDropdownPanel = () => {
        setAnimated(true)
        setOpen(true)
    }

    const hideDropdownPanel = () => setAnimated(false)

    const onOptionClick = (index: number) => {
        hideDropdownPanel()
        setActiveOtion(index)
        console.log('index: ' + index)
    }

    const onAnimationEnd = () => !isAnimated && setOpen(false)

    return (
        <MenuRoot>
            <ButtonMenu onClick={open ? hideDropdownPanel : openDropdownPanel}>
                Open menu
            </ButtonMenu>
            {open &&
                <DropdownPanel isAnimated={isAnimated} ref={menuElement} onAnimationEnd={onAnimationEnd}>
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

