import { RubiksCube } from '@/engine';
import { RubiksCubeEvent } from './rubiks-cube-event';

export class GameLostEvent extends RubiksCubeEvent {
  constructor(cube: RubiksCube) {
    super('game-lost', cube);
  }
}
