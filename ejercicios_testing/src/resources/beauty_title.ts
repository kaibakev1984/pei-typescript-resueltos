function beautify(message: string) {
    let lines: String = "";
    for(let i = 0; i < message.length; i++) {
        lines += "=";
    }

    return `\n${lines}\n${message}\n\n${lines}\n`;
}

export { beautify}