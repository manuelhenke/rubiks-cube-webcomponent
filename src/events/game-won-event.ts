import { RubiksCube } from '@/engine';
import { RubiksCubeEvent } from './rubiks-cube-event';

export class GameWonEvent extends RubiksCubeEvent {
  constructor(cube: RubiksCube) {
    super('game-won', cube);
  }
}
