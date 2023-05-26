/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable lit-a11y/click-events-have-key-events */
import { html, unsafeCSS, LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import { RubiksCubeEngine } from '@/engine';
import { GameWonEvent, GameLostEvent } from '@/events';
import Style from './rubiksCube.scss';

/**
 * @fires {GameWonEvent} rubiksCube:game-won - User just won the game
 * @fires {GameLostEvent} rubiksCube:game-lost - User just lost the game
 */
export class RubiksCubeGame extends LitElement {
  static get styles() {
    return unsafeCSS(Style);
  }

  @state({})
  private engine: RubiksCubeEngine;

  constructor() {
    super();

    this.engine = new RubiksCubeEngine(
      this.gameWonCallback.bind(this),
      this.gameLostCallback.bind(this)
    );
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

  private createCube() {
    if (this.engine) {
      this.engine.createCube();
      this.requestUpdate();
    }
  }

  private gameWonCallback() {
    this.dispatchEvent(new GameWonEvent(this.engine.cube));
  }

  private gameLostCallback() {
    this.dispatchEvent(new GameLostEvent(this.engine.cube));
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
    if (!this.engine?.cube) {
      return html`No Cube :(`;
    }

    return html`<div class="cube-container">Cube</div>`;
  }
}

declare global {
  interface GlobalEventHandlersEventMap {
    'rubiks-cube:game-won': GameWonEvent;
    'rubiks-cube:game-lost': GameLostEvent;
  }
}

export default RubiksCubeGame;
