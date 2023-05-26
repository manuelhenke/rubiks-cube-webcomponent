"use strict";
var _RubiksCubeEngine_cube;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RubiksCubeEngine = void 0;
const tslib_1 = require("tslib");
const RubiksCube_1 = require("./RubiksCube.js");
class RubiksCubeEngine {
    constructor(onWinCallback = () => { }, onLoseCallback = () => { }) {
        _RubiksCubeEngine_cube.set(this, void 0);
        this.isGameOver = true;
        this.onWinCallback = onWinCallback;
        this.onLoseCallback = onLoseCallback;
    }
    get cube() {
        return tslib_1.__classPrivateFieldGet(this, _RubiksCubeEngine_cube, "f");
    }
    createCube() {
        this.restart();
    }
    restart() {
        tslib_1.__classPrivateFieldSet(this, _RubiksCubeEngine_cube, new RubiksCube_1.RubiksCube(), "f");
        this.isGameOver = false;
    }
}
exports.RubiksCubeEngine = RubiksCubeEngine;
_RubiksCubeEngine_cube = new WeakMap();
//# sourceMappingURL=RubiksCubeEngine.js.map