import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

import Layout from '../../../components/Layout';
import Markdown from '../../../components/Markdown';

const Age = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { t } = useTranslation();

  return (
    <Layout title={t(`my_turn.turn.${slug}.title`)} container>
      <Markdown>{t(`pages.${slug}`)}</Markdown>
    </Layout>
  );
};

export default Age;
