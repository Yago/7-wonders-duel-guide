import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

import Layout from '../../components/Layout';

const resources = [
  { slug: 'stone', icon: '🪨' },
  { slug: 'brick', icon: '🧱' },
  { slug: 'wood', icon: '🪵' },
  { slug: 'paper', icon: '📜' },
  { slug: 'glass', icon: '💎️' },
];

const initial = {
  stone: 0,
  wood: 0,
  brick: 0,
  paper: 0,
  glass: 0,
};

const Age = () => {
  const { t } = useTranslation();
  const [desired, setDesired] = useState<Record<string, number>>(initial);
  const [production, setProduction] = useState<Record<string, number>>(initial);
  const [opponent, setOpponent] = useState<Record<string, number>>(initial);
  const [fixed, setFixed] = useState<Record<string, boolean>>({
    stone: false,
    wood: false,
    brick: false,
    paper: false,
    glass: false,
  });
  const [money, setMoney] = useState(0);

  return (
    <Layout title={t(`utilities.costs.title`)} container>
      <div className="space-y-6">
        {(
          [
            [production, setProduction],
            [opponent, setOpponent],
            [desired, setDesired],
          ] as [
            Record<string, number>,
            React.Dispatch<React.SetStateAction<Record<string, number>>>
          ][]
        ).map(([get, set], i) => (
          <div key={`counter-${i}`}>
            {i === 2 && (
              <>
                <h2 className="mt-6 text-xl font-bold">
                  {t('utilities.costs.fixed')}
                </h2>
                <div className="flex w-full mt-2 mb-6 isolate -space-x-px shadow-sm">
                  {resources.map(({ slug, icon }, index) => (
                    <button
                      key={`fix-${slug}`}
                      type="button"
                      onClick={() =>
                        setFixed({ ...fixed, [slug]: !fixed[slug] })
                      }
                      className={clsx(
                        'relative px-2 text-sm font-medium text-center text-gray-500 bg-white border py-2.5 grow hover:bg-gray-50 focus:z-20',
                        index === 0 && 'rounded-l-md',
                        index === resources.length - 1 && 'rounded-r-md',
                        fixed[slug]
                          ? 'z-10 border-amber-500 bg-amber-50'
                          : 'border-gray-300'
                      )}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </>
            )}
            <h2 className="text-xl font-bold">
              {i === 0 && t('utilities.costs.production')}
              {i === 1 && t('utilities.costs.opponent')}
              {i === 2 && t('utilities.costs.desired')}
            </h2>
            {resources.map(({ slug, icon }) => (
              <div
                key={slug}
                className="flex items-center justify-between mt-2"
              >
                <button
                  type="button"
                  onClick={() =>
                    set({
                      ...get,
                      [slug]: get[slug] > 0 ? get[slug] - 1 : 0,
                    })
                  }
                  className="inline-flex items-center text-white border border-transparent rounded bg-amber-500 py-2.5 px-2.5 shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  <MinusIcon className="w-5 h-5" aria-hidden="true" />
                </button>
                <span className="space-x-6">
                  <span>{icon}</span>
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <input
                    type="number"
                    name={`qty-${slug}`}
                    className="inline-block w-20 border-gray-300 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                    value={get[slug]}
                  />
                </span>
                <button
                  type="button"
                  onClick={() => set({ ...get, [slug]: get[slug] + 1 })}
                  className="inline-flex items-center text-white border border-transparent rounded bg-amber-500 py-2.5 px-2.5 shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  <PlusIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>

      <h2 className="mt-6 text-xl font-bold">{t('utilities.costs.money')}</h2>
      <div className="flex items-center justify-between mt-2">
        <button
          type="button"
          onClick={() => setMoney(i => (i > 0 ? i - 1 : 0))}
          className="inline-flex items-center text-white border border-transparent rounded bg-amber-500 py-2.5 px-2.5 shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          <MinusIcon className="w-5 h-5" aria-hidden="true" />
        </button>
        <span className="space-x-6">
          <span>🪙</span>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <input
            type="number"
            name="qty-money"
            className="inline-block w-20 border-gray-300 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
            value={money}
          />
        </span>
        <button
          type="button"
          onClick={() => setMoney(i => i + 1)}
          className="inline-flex items-center text-white border border-transparent rounded bg-amber-500 py-2.5 px-2.5 shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          <PlusIcon className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      <h2 className="mt-12 text-xl font-bold">{t('utilities.costs.cost')}</h2>
      <p className="py-12 mt-2 text-4xl font-bold text-center border bg-amber-100 rounded-xl border-amber-700">
        {resources.reduce(
          (acc, { slug }) =>
            acc +
            Math.max(
              (desired[slug] - production[slug]) *
                (!fixed[slug] ? 2 + opponent[slug] : 1),
              0
            ),
          0
        ) + money}{' '}
        🪙
      </p>
    </Layout>
  );
};

export default Age;
