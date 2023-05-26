import { RubiksCube } from '@/engine';
import { deepCopy } from '@/utils';

interface RubiksCubeEventDetail {
  cube: RubiksCube;
}

export class RubiksCubeEvent<T = void> extends CustomEvent<T & RubiksCubeEventDetail> {
  constructor(type: string, cube: RubiksCube, eventInitDict: CustomEventInit<T> = {}) {
    const { detail, ...eventInitDictWithoutDetail } = eventInitDict;

    super(`rubiksCube:${type}`, {
      detail: {
        cube: deepCopy(cube),
        ...detail,
      } as T & RubiksCubeEventDetail,
      bubbles: true,
      composed: true,
      cancelable: false,
      ...eventInitDictWithoutDetail,
    });
  }
}
