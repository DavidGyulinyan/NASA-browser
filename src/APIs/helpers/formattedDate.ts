const formattedDate = (date: Date) => {
    const dateFormat = `${date.getFullYear().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${(date.getDate()).toString().padStart(2, '0')}`;
    return dateFormat
}

export default formattedDate;