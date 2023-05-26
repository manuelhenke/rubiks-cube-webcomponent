import { RubiksCubeGame } from './RubiksCubeGame';

const CUSTOM_ELEMENT_TAG = 'rubiks-cube-game';

window.customElements.define(CUSTOM_ELEMENT_TAG, RubiksCubeGame);

declare global {
  interface HTMLElementTagNameMap {
    [CUSTOM_ELEMENT_TAG]: RubiksCubeGame;
  }
}
