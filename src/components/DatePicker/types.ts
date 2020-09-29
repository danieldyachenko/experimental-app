import { ChangeEvent, MouseEvent } from "react"

export type Months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
]

export type Week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export type OnDayClick = (day: number) => void

export type OnMouseMove = (day: number) => void

export type FormatDate = (date: Date) => string

export type InputChange = (event: ChangeEvent<HTMLInputElement>) => void