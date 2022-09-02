import React from 'react';
import { useTranslation } from 'react-i18next';
import type { NextPage } from 'next';
import Head from 'next/head';

import StackedList from '../components/StackedList';

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-lg py-6 mx-auto">
      <Head>
        <title>7 Wonders Duel Companion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-4 mb-2">
        <h1 className="text-3xl font-bold">
          <span className="sr-only">{t('title')}</span>
          <img
            className="w-2/3 mx-auto"
            src="/images/7-wonders-duel.png"
            alt="7 Wonders Duel logo"
          />
        </h1>
        <h2 className="mt-6 text-xl font-bold">{t('setup.title')}</h2>
      </div>

      <StackedList
        items={[
          { label: t('setup.age_i.title'), link: '/ages/age_i' },
          { label: t('setup.age_ii.title'), link: '/ages/age_ii' },
          { label: t('setup.age_iii.title'), link: '/ages/age_iii' },
        ]}
      />

      <div className="px-4 mt-8 mb-2">
        <h2 className="mt-4 text-xl font-bold">{t('my_turn.title')}</h2>
        <h3 className="mt-2 text-lg font-bold">{t('my_turn.before.title')}</h3>
      </div>

      <StackedList
        items={[
          {
            label: t('my_turn.before.conspiracy_trigger.title'),
            link: '/my_turn/before/conspiracy_trigger',
          },
          {
            label: t('my_turn.before.mythology_token.title'),
            link: '/my_turn/before/mythology_token',
          },
        ]}
      />

      <div className="px-4 mt-8 mb-2">
        <h3 className="mt-2 text-lg font-bold">{t('my_turn.turn.title')}</h3>
      </div>

      <StackedList
        items={[
          {
            label: t('my_turn.turn.build_building.title'),
            link: '/my_turn/turn/build_building',
          },
          {
            label: t('my_turn.turn.build_great_temple.title'),
            link: '/my_turn/turn/build_great_temple',
          },
          {
            label: t('my_turn.turn.senator.title'),
            link: '/my_turn/turn/senator',
          },
          {
            label: t('my_turn.turn.build_wonder.title'),
            link: '/my_turn/turn/build_wonder',
          },
          { label: t('my_turn.turn.earn.title'), link: '/my_turn/turn/earn' },
          {
            label: t('my_turn.turn.pantheon.title'),
            link: '/my_turn/turn/pantheon',
          },
          {
            label: t('my_turn.turn.conspiracy_preparation.title'),
            link: '/my_turn/turn/conspiracy_preparation',
          },
        ]}
      />

      <div className="px-4 mt-8 mb-2">
        <h2 className="mt-4 text-xl font-bold">{t('symbols.title')}</h2>
      </div>

      <StackedList
        items={[
          { label: t('symbols.buildings.title'), link: '/symbols/buildings' },
          { label: t('symbols.wonders.title'), link: '/symbols/wonders' },
          { label: t('symbols.progress.title'), link: '/symbols/progress' },
          { label: t('symbols.guilds.title'), link: '/symbols/guilds' },
          { label: t('symbols.gods.title'), link: '/symbols/gods' },
          { label: t('symbols.senators.title'), link: '/symbols/senators' },
          { label: t('symbols.decrees.title'), link: '/symbols/decrees' },
          {
            label: t('symbols.conspiracies.title'),
            link: '/symbols/conspiracies',
          },
        ]}
      />

      <div className="px-4 mt-8 mb-2">
        <h2 className="mt-4 text-xl font-bold">{t('victories.title')}</h2>
      </div>

      <StackedList
        items={[
          { label: t('victories.civilian.title'), link: 'victories/civilian' },
          { label: t('victories.military.title'), link: 'victories/military' },
          { label: t('victories.science.title'), link: 'victories/science' },
          {
            label: t('victories.political.title'),
            link: 'victories/political',
          },
        ]}
      />

      <div className="px-4 mt-8 mb-2">
        <h2 className="mt-4 text-xl font-bold">{t('utilities.title')}</h2>
      </div>

      <StackedList
        items={[
          { label: t('utilities.points.title'), link: '/utilities/points' },
          { label: t('utilities.costs.title'), link: '/utilities/costs' },
        ]}
      />
    </div>
  );
};

export default Home;
