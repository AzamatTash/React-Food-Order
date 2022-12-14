export const getConvertDate = (unixDate:string) => {
    const data = new Date(+unixDate);
    const months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    const date = data.getDate();
    const month = months[data.getMonth()];
    const year = data.getFullYear()
    return date + '.' + month + '.' + year;
};