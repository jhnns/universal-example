import { render as preactRender } from "preact";
import App from "../components/common/app/app";

function render() {
    preactRender(<App />, document.body);
}

document.addEventListener("DOMContentLoaded", render);
