export const humanDate = (date: string = Date()) => {
    const d = new Date(date);
    return d.toLocaleString();
}