import { FormatDate } from '../types';

const formatDate: FormatDate = date => {
    let day: string | number = date.getDate();
    if (day < 10) day = '0' + day;

    let month: string | number = date.getMonth() + 1;
    if (month < 10) month = '0' + month;

    const year: number = date.getFullYear();

    return day + '.' + month + '.' + year;
};

export default formatDate;
