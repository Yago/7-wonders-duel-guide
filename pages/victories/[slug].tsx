import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';

const Age = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { t } = useTranslation();

  return (
    <Layout title={t(`victories.${slug}.title`)} container>
      <div className="prose prose-headings:mt-4 prose-headings:mb-1 prose-headings:font-bold prose-h1:text-3xl">
        <h1>{t(`victories.${slug}.title`)}</h1>
        <p>{t(`victories.${slug}.desc`)}</p>
      </div>
    </Layout>
  );
};

export default Age;
