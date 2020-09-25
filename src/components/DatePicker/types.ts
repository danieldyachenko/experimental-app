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

export type FormatDate = (date: Date) => string