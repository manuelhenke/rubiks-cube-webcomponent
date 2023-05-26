import { RubiksCube } from '../engine/index.js';
interface RubiksCubeEventDetail {
    cube: RubiksCube;
}
export declare class RubiksCubeEvent<T = void> extends CustomEvent<T & RubiksCubeEventDetail> {
    constructor(type: string, cube: RubiksCube, eventInitDict?: CustomEventInit<T>);
}
export {};
//# sourceMappingURL=rubiks-cube-event.d.ts.map