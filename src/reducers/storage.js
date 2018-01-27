export const TOGGLE = 'storage/toggle';

export const LOCAL = 0;
export const REMOTE = 1;

const initialState = {
  storage: LOCAL,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE:
      return { storage: action.storage };
    default:
      return state;
  }
}

export function toggleStorage(val) {
  return { type: TOGGLE, storage: val };
}
