"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RubiksCubeEvent = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("../utils/index.js");
class RubiksCubeEvent extends CustomEvent {
    constructor(type, cube, eventInitDict = {}) {
        const { detail } = eventInitDict, eventInitDictWithoutDetail = tslib_1.__rest(eventInitDict, ["detail"]);
        super(`rubiksCube:${type}`, Object.assign({ detail: Object.assign({ cube: (0, utils_1.deepCopy)(cube) }, detail), bubbles: true, composed: true, cancelable: false }, eventInitDictWithoutDetail));
    }
}
exports.RubiksCubeEvent = RubiksCubeEvent;
//# sourceMappingURL=rubiks-cube-event.js.map