export const resizeTextarea = (textareaRef: React.RefObject<HTMLTextAreaElement>) => {
    const maxRow = 5;
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    const scrollHeight = textarea.scrollHeight;

    const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
    const maxHeight = lineHeight * maxRow;

    if (scrollHeight <= maxHeight) {
        textarea.style.height = scrollHeight + "px";
    } else {
        textarea.style.height = maxHeight + "px";
        textarea.style.overflowY = "auto";
    }
}