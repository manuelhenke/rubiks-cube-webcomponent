import { RubiksCube } from './RubiksCube.js';
export declare class RubiksCubeEngine {
    #private;
    isGameOver: boolean;
    onWinCallback: () => void;
    onLoseCallback: () => void;
    constructor(onWinCallback?: () => void, onLoseCallback?: () => void);
    get cube(): RubiksCube;
    createCube(): void;
    restart(): void;
}
//# sourceMappingURL=RubiksCubeEngine.d.ts.map