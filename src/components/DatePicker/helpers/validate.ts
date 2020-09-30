const validate = (date: string) => {
    const splittedDate = date.split(".");
    
    return (
        parseInt(splittedDate[0]) <= 31 &&
        parseInt(splittedDate[1]) <= 12 &&
        /^\d{2}.\d{2}.\d{4}$/.test(date)
    );
};

export default validate;
