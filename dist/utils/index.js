"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyRoutes = (routes, router) => {
    for (const route of routes) {
        const { method, path, handler } = route;
        router[method](path, handler);
    }
};
exports.applyMiddleware = (middlewareWrappers, router) => {
    for (const wrapper of middlewareWrappers) {
        wrapper(router);
    }
};
//# sourceMappingURL=index.js.map