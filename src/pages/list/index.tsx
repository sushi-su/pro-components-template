import { Access } from '@/components';
import { initialState } from '@/store';
import { Button } from 'antd';
import type { FC } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

const List: FC = () => {
  const refreshInitialStateData = useResetRecoilState(initialState);
  const setInitialStateData = useSetRecoilState(initialState);

  return (
    <Access accessible={true}>
      <Button type="primary" onClick={refreshInitialStateData}>
        Primary
      </Button>

      <Button
        type="primary"
        onClick={() =>
          setInitialStateData({ initialState: { userName: '', permissions: [] }, loading: true, error: null })
        }
      >
        Primary
      </Button>
    </Access>
  );
};

export default List;
