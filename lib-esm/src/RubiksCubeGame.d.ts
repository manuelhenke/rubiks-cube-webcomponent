import { LitElement } from 'lit';
import { GameWonEvent, GameLostEvent } from '@/events';
/**
 * @fires {GameWonEvent} rubiksCube:game-won - User just won the game
 * @fires {GameLostEvent} rubiksCube:game-lost - User just lost the game
 */
export declare class RubiksCubeGame extends LitElement {
    static get styles(): import("lit").CSSResult;
    private engine;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private createCube;
    private gameWonCallback;
    private gameLostCallback;
    setGameModeConfiguration(): void;
    restartGame(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface GlobalEventHandlersEventMap {
        'rubiks-cube:game-won': GameWonEvent;
        'rubiks-cube:game-lost': GameLostEvent;
    }
}
export default RubiksCubeGame;
//# sourceMappingURL=RubiksCubeGame.d.ts.map