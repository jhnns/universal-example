import { Component } from "preact";
import Link from "../../common/router/link";
import { list, listItem } from "./nav.css";
import { link, activeLink } from "../link.css";
import routes from "../../../routes";

const nbsp = "\u00a0";

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <ul className={list}>
                    <li className={listItem}>
                        <Link
                            route={routes.top5}
                            className={link}
                            activeClass={activeLink}
                        >
                            Top{nbsp}5
                        </Link>
                    </li>
                    <li className={listItem}>
                        <Link
                            route={routes.allPosts}
                            className={link}
                            activeClass={activeLink}
                        >
                            All
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
