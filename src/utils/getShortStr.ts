export const getShortStr = (str:string) => {
    if (str.length > 20) {
        return str.slice(0, 18) + '...';
    }
    return str;
};