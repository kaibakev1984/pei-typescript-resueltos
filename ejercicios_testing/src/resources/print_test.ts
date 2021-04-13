const ANSI_COLOR_LGH_RED = "\x1b[31m";
const ANSI_COLOR_LGH_GREEN = "\x1b[32m";
const ANSI_COLOR_RESET = "\x1b[0m";

function print_test(message: string, ok: boolean) {
    if (ok) {
        
        console.log(`${message}... `,  ANSI_COLOR_LGH_GREEN + "OK", ANSI_COLOR_RESET);
    } else {
        console.log(`${message}... `, ANSI_COLOR_LGH_RED + "Error", ANSI_COLOR_RESET);
    }
}

export {print_test}