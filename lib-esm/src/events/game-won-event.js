import { RubiksCubeEvent } from './rubiks-cube-event.js';
export class GameWonEvent extends RubiksCubeEvent {
    constructor(cube) {
        super('game-won', cube);
    }
}
//# sourceMappingURL=game-won-event.js.map