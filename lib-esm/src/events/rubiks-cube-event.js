import { deepCopy } from '../utils/index.js';
export class RubiksCubeEvent extends CustomEvent {
    constructor(type, cube, eventInitDict = {}) {
        const { detail, ...eventInitDictWithoutDetail } = eventInitDict;
        super(`rubiksCube:${type}`, {
            detail: {
                cube: deepCopy(cube),
                ...detail,
            },
            bubbles: true,
            composed: true,
            cancelable: false,
            ...eventInitDictWithoutDetail,
        });
    }
}
//# sourceMappingURL=rubiks-cube-event.js.map