var _RubiksCubeEngine_cube;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { RubiksCube } from './RubiksCube.js';
export class RubiksCubeEngine {
    constructor(onWinCallback = () => { }, onLoseCallback = () => { }) {
        _RubiksCubeEngine_cube.set(this, void 0);
        this.isGameOver = true;
        this.onWinCallback = onWinCallback;
        this.onLoseCallback = onLoseCallback;
    }
    get cube() {
        return __classPrivateFieldGet(this, _RubiksCubeEngine_cube, "f");
    }
    createCube() {
        this.restart();
    }
    restart() {
        __classPrivateFieldSet(this, _RubiksCubeEngine_cube, new RubiksCube(), "f");
        this.isGameOver = false;
    }
}
_RubiksCubeEngine_cube = new WeakMap();
//# sourceMappingURL=RubiksCubeEngine.js.map