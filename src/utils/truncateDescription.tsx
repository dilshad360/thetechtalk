export const truncateDescription = (text: string, maxLength: number) => {
    if (text == null) return;
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + "...";
};