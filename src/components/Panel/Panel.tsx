import React, { useRef } from "react"
import { DarkBackground, PanelButton, Panel, PanelContainer } from "./styled"
import { useState } from "react"

export default () => {

    const [open, setOpen] = useState<boolean>(false)
    const [isAnimated, setAnimated] = useState<boolean>(false)

    const openPanel = () => {
        setAnimated(true)
        setOpen(true)
    }

    const closePanel = () => {
        setAnimated(false)
    }

    return (
        <>
            <PanelButton onClick={openPanel}>
                Open panel
            </PanelButton>
            {open &&
                <PanelContainer>
                    <Panel isAnimated={isAnimated}>
                        Panel
                    </Panel>
                    <DarkBackground onAnimationEnd={() => !isAnimated ? setOpen(false) : null} onClick={closePanel} isAnimated={isAnimated}/>
                </PanelContainer>
            }
        </>
    )
}