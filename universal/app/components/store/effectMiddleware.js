import has from "../../util/has";

export function createEffectAction(actionType, effect, args) {
    return {
        type: actionType + "/effect",
        payload: {
            effect,
            args,
        },
    };
}

export default function effectMiddleware(execEffect) {
    return store => next => action => {
        if (has(action, "payload")) {
            const payload = action.payload;

            if (has(payload, "effect")) {
                return execEffect(payload.effect, payload.args);
            }
        }

        return next(action);
    };
}
