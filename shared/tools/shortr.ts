export type ShortrBodyType = {
    long: string;
};

export type ShortrResponseType = {
    short: string;
};

export function hashURL(str: string) {
    try {
        // first standardize the url
        const url = new URL(str);

        // Ignore search params
        const target = url.hostname + url.pathname;

        let hashedInt = 5381;
        let i = target.length;

        while (i > 0) {
            hashedInt = (hashedInt * 33) ^ target.charCodeAt(--i);
        }

        /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
         * integers. Since we want the results to be always positive, convert the
         * signed int to an unsigned by doing an unsigned bitshift. */
        const finalHash = (hashedInt >>> 0).toString(36);
        return finalHash;
    } catch (_) {
        return "";
    }
}
