"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameWonEvent = void 0;
const rubiks_cube_event_1 = require("./rubiks-cube-event.js");
class GameWonEvent extends rubiks_cube_event_1.RubiksCubeEvent {
    constructor(cube) {
        super('game-won', cube);
    }
}
exports.GameWonEvent = GameWonEvent;
//# sourceMappingURL=game-won-event.js.map