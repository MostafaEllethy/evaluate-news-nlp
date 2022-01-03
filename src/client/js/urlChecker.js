function checkURL(inputText) {
    let url;

    try {
        url = new URL(inputText);
    } catch (_) {
        return false;
    }
    return true;
}

export { checkURL }
