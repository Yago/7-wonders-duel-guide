import React from 'react';
import { useTranslation } from 'react-i18next';

import Layout from '../../components/Layout';

const Age = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t(`utilities.points.title`)} container>
      <img src="/images/points.jpg" alt="point sheet" />
    </Layout>
  );
};

export default Age;
