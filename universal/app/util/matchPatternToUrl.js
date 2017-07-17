import querystring from "querystring";

export default function matchPatternToUrl(matchPattern, params) {
    if (params === null) {
        return matchPattern;
    }

    let url = typeof matchPattern === "string" ? matchPattern : "";
    const searchParams = {};

    Object.keys(params).forEach(key => {
        const pattern = ":" + key;
        const patternIdx = url.indexOf(pattern);

        if (patternIdx === -1) {
            searchParams[key] = params[key];
        } else {
            url = url.slice(0, patternIdx - 1) + params[key] + url.slice(patternIdx + pattern.length);
        }
    });

    const paramString = querystring.stringify(searchParams);

    if (paramString === "") {
        return url;
    }

    return url + "?" + paramString;
}
