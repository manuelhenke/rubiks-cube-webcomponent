import { RubiksCubeEvent } from './rubiks-cube-event.js';
export class GameLostEvent extends RubiksCubeEvent {
    constructor(cube) {
        super('game-lost', cube);
    }
}
//# sourceMappingURL=game-lost-event.js.map