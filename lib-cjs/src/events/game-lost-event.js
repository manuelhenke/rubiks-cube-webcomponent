"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameLostEvent = void 0;
const rubiks_cube_event_1 = require("./rubiks-cube-event.js");
class GameLostEvent extends rubiks_cube_event_1.RubiksCubeEvent {
    constructor(cube) {
        super('game-lost', cube);
    }
}
exports.GameLostEvent = GameLostEvent;
//# sourceMappingURL=game-lost-event.js.map