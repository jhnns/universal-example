import { Component } from "preact";

function renderHref(route, params) {
    if (params === undefined) {
        return route.match;
    }

    let href = route.match;

    for (const key of params.keys()) {
        const pattern = ":" + key;
        const patternIdx = href.indexOf(pattern);

        if (patternIdx > -1) {
            params.delete(key);

            href =
                href.slice(0, patternIdx - 1) +
                params.get(key) +
                href.slice(patternIdx + pattern.length);
        }
    }

    return href + "?" + params.toString();
}

export default class Link extends Component {
    render(props) {
        const {
            route = this.context.route,
            params,
            children,
            activeClass = "",
        } = props;
        const classes = [
            route === this.context.route ? activeClass : "",
            props.class,
        ];
        const isExternal = typeof route === "string";
        const href = isExternal === true ? route : renderHref(route, params);

        return (
            <a href={href} class={classes.join(" ")} dataNoRouting={isExternal}>
                {children}
            </a>
        );
    }
}
