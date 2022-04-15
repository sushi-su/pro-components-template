import { atom, selector } from 'recoil';

interface InitialData {
  userName: string;
  permissions: string[];
}

interface InitialLoadingState {
  loading: boolean;
  error: Error | null;
}

interface InitialState extends InitialLoadingState {
  initialState: InitialData;
}

export const initialData = atom<InitialData>({
  key: 'initialData',
  default: {
    userName: '',
    permissions: [],
  },
});

const initialLoadingState = atom<InitialLoadingState>({
  key: 'initialLoadingState',
  default: {
    loading: false,
    error: null,
  },
});

const initialState = selector<InitialState>({
  key: 'initialState',
  get: ({ get }) => {
    return {
      ...get(initialLoadingState),
      initialState: get(initialData),
    };
  },
  set: ({ set }, newState) => {
    if (newState.constructor === Object) {
      const { initialState, ...initialLoadingStateData } = newState as InitialState;
      set(initialData, initialState);
      set(initialLoadingState, initialLoadingStateData);
      return;
    }

    console.log(Object.keys(newState));
  },
});

export default initialState;
