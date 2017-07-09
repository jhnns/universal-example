import onLinkClick from "nanohref";
import onHistoryPop from "nanohistory";

export default function handleUserNavigation(store) {
    return () => {
        onHistoryPop(location => {
            void 0;
            // router(location.pathname);
        });
        onLinkClick(node => {
            const href = node.href;

            if (node.hasAttribute("data-route") === false) {
                window.location = href;

                return;
            }

            void 0;

            // context.exec(navigate, router, node.href, {
            //     replaceRoute: node.hasAttribute("data-replace-url") === true,
            // });
        });
    };
}
