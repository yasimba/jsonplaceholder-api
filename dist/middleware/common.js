"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const jwt = __importStar(require("jsonwebtoken"));
const compression_1 = __importDefault(require("compression"));
const config_1 = __importDefault(require("../config"));
/*Check Json web token to make sure that an authenticated user is accessing authorized routes*/
const checkJwt = (req, res, next) => {
    //Token must be in header when making a request
    const token = req.headers["auth"];
    let jwtPayload;
    try {
        jwtPayload = jwt.verify(token, config_1.default.jwtSecret);
        console.log("Token verified");
    }
    catch (error) {
        res.send("Unauthorized access. Please use a valid Token or generate a new one using: http://localhost:3000/newToken and pass it via header.");
        return;
    }
    //move on to next middleware
    next();
};
exports.handleCors = (router) => router.use(cors_1.default({ credentials: true, origin: true }));
exports.handleBodyRequestParsing = (router) => {
    router.use(body_parser_1.default.urlencoded({ extended: true }));
    router.use(body_parser_1.default.json());
};
exports.handleCompression = (router) => {
    router.use(compression_1.default());
};
/* These are our authorized routes. Verify jwt before allowing access*/
exports.handleAuthentication = (router) => {
    router.use('/albums', checkJwt);
    router.use('/photos', checkJwt);
    router.use('/photos/:id', checkJwt);
    router.use('/albums/:id', checkJwt);
};
//# sourceMappingURL=common.js.map