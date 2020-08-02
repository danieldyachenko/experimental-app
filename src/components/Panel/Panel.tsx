import React, { useRef } from "react"
import { DarkBackground, PanelButton, Panel } from "./styled"
import { useState } from "react"

export default () => {

    const [open, setOpen] = useState<boolean>(false)
    const [isAnimated, setAnimated] = useState<boolean>(false)

    const panelElement = useRef<HTMLDivElement>(null)

    const openPanel = () => {
        setAnimated(true)
        setOpen(true)
    }

    const closePanel = () => {
        if (!panelElement.current.contains(event.target as Node)) {
            setAnimated(false)
            setTimeout(() => setOpen(false), 150)
        }
    }

    return (
        <>
            <PanelButton onClick={openPanel}>
                Open panel
            </PanelButton>
            {open &&
                <DarkBackground onClick={closePanel} isAnimated={isAnimated}>
                    <Panel ref={panelElement}>
                        Panel
                    </Panel>
                </DarkBackground>
            }
        </>
    )
}