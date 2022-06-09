import { PageContainer, ProForm, ProFormDatePicker } from '@ant-design/pro-components';
import type { FC } from 'react';

const HomePage: FC = () => {
  return (
    <PageContainer>
      <ProForm>
        <ProFormDatePicker />
      </ProForm>
    </PageContainer>
  );
};

export default HomePage;
