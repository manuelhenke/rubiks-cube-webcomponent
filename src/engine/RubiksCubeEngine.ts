import { RubiksCube } from './RubiksCube';

export class RubiksCubeEngine {
  #cube!: RubiksCube;

  isGameOver = true;

  onWinCallback: () => void;

  onLoseCallback: () => void;

  constructor(onWinCallback = () => {}, onLoseCallback = () => {}) {
    this.onWinCallback = onWinCallback;
    this.onLoseCallback = onLoseCallback;
  }

  get cube() {
    return this.#cube;
  }

  createCube() {
    this.restart();
  }

  restart() {
    this.#cube = new RubiksCube();
    this.isGameOver = false;
  }
}
