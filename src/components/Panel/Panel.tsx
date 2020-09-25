import React from "react"
import { DarkBackground, PanelButton, PanelLeft, PanelContainer } from "./styled"
import { useState } from "react"

export default function Panel() {

    const [open, setOpen] = useState<boolean>(false)
    const [isAnimated, setAnimated] = useState<boolean>(false)

    const openPanel = () => {
        setAnimated(true)
        setOpen(true)
    }

    const closePanel = () => setAnimated(false)

    const onAnimationEnd = () => !isAnimated && setOpen(false)

    return (
        <>
            <PanelButton onClick={openPanel}>
                Open panel
            </PanelButton>
            {open &&
                <PanelContainer>
                    <PanelLeft isAnimated={isAnimated}>
                        Panel
                    </PanelLeft>
                    <DarkBackground onAnimationEnd={onAnimationEnd} onClick={closePanel} isAnimated={isAnimated}/>
                </PanelContainer>
            }
        </>
    )
}