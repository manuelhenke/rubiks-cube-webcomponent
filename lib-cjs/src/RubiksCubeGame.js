"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RubiksCubeGame = void 0;
const tslib_1 = require("tslib");
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable lit-a11y/click-events-have-key-events */
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const engine_1 = require("./engine/index.js");
const events_1 = require("./events/index.js");
const rubiksCube_scss_1 = require("./rubiksCube.scss");
/**
 * @fires {GameWonEvent} rubiksCube:game-won - User just won the game
 * @fires {GameLostEvent} rubiksCube:game-lost - User just lost the game
 */
class RubiksCubeGame extends lit_1.LitElement {
    static get styles() {
        return (0, lit_1.unsafeCSS)(rubiksCube_scss_1.default);
    }
    constructor() {
        super();
        this.engine = new engine_1.RubiksCubeEngine(this.gameWonCallback.bind(this), this.gameLostCallback.bind(this));
    }
    connectedCallback() {
        // @ts-expect-error: super.connectedCallback always defined
        if (super.connectedCallback) {
            super.connectedCallback();
        }
        this.createCube();
    }
    disconnectedCallback() {
        // @ts-expect-error: super.disconnectedCallback always defined
        if (super.disconnectedCallback) {
            super.disconnectedCallback();
        }
    }
    createCube() {
        if (this.engine) {
            this.engine.createCube();
            this.requestUpdate();
        }
    }
    gameWonCallback() {
        this.dispatchEvent(new events_1.GameWonEvent(this.engine.cube));
    }
    gameLostCallback() {
        this.dispatchEvent(new events_1.GameLostEvent(this.engine.cube));
    }
    setGameModeConfiguration() {
        this.createCube();
    }
    restartGame() {
        if (this.engine) {
            this.engine.restart();
            this.requestUpdate();
        }
    }
    render() {
        var _a;
        if (!((_a = this.engine) === null || _a === void 0 ? void 0 : _a.cube)) {
            return (0, lit_1.html) `No Cube :(`;
        }
        return (0, lit_1.html) ` <div class="cube-container">Cube</div> `;
    }
}
tslib_1.__decorate([
    (0, decorators_js_1.state)({})
], RubiksCubeGame.prototype, "engine", void 0);
exports.RubiksCubeGame = RubiksCubeGame;
exports.default = RubiksCubeGame;
//# sourceMappingURL=RubiksCubeGame.js.map