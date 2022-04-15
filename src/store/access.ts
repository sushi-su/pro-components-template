import { selector } from 'recoil';
import { initialData } from './initialState';

const accessState = selector({
  key: 'accessState',
  get: ({ get }) => {
    const { permissions } = get(initialData);

    const permissionsSet = new Set(permissions);

    return {
      canReadList: permissionsSet.has('11111'),
    };
  },
});

export default accessState;
