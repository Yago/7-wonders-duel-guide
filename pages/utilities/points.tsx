import React, { useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

import Layout from '../../components/Layout';

type State = Record<string, { icon: string; player1: number; player2: number }>;

type Action = {
  type: 'increment' | 'decrement';
  player: 1 | 2;
  key: keyof State;
};

const initialPoints: State = {
  blue: { icon: '🟦', player1: 0, player2: 0 },
  green: { icon: '🟩', player1: 0, player2: 0 },
  yellow: { icon: '🟨', player1: 0, player2: 0 },
  guilds: { icon: '🟪', player1: 0, player2: 0 },
  gods: { icon: '✡️', player1: 0, player2: 0 },
  wonders: { icon: '🏯', player1: 0, player2: 0 },
  progress: { icon: '🟢', player1: 0, player2: 0 },
  money: { icon: '🪙', player1: 0, player2: 0 },
  military: { icon: '⚔️', player1: 0, player2: 0 },
  politicians: { icon: '🧑‍⚖', player1: 0, player2: 0 },
  total: { icon: 'Σ', player1: 0, player2: 0 },
};

const pointsReducer = (state: State, { type, player, key }: Action) => {
  switch (type) {
    case 'increment':
      return {
        ...state,
        [key]: {
          ...state[key],
          [`player${player}`]: state[key][`player${player}`] + 1,
        },
        total: {
          ...state.total,
          [`player${player}`]: state.total[`player${player}`] + 1,
        },
      };
    case 'decrement':
      return {
        ...state,
        [key]: {
          ...state[key],
          [`player${player}`]: Math.max(state[key][`player${player}`] - 1, 0),
        },
        total: {
          ...state.total,
          [`player${player}`]: Math.max(state.total[`player${player}`] - 1, 0),
        },
      };
    default:
      return state;
  }
};

const Age = () => {
  const { t } = useTranslation();
  const [names, setNames] = useState<Record<string, string>>({
    player1: '',
    player2: '',
  });

  const [points, dispatchPoints] = useReducer(pointsReducer, initialPoints);

  return (
    <Layout title={t(`utilities.points.title`)} container>
      <>
        <div className="flex items-center justify-between pl-12 mt-2 space-x-2">
          {[1, 2].map(i => (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <input
              key={`player-${i}-name`}
              type="text"
              name={`player${i}-name`}
              className="inline-block w-1/2 border-gray-300 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
              value={names[`player${i}`]}
              placeholder={`${t('utilities.points.player_name')} ${i}`}
              onChange={e =>
                setNames({ ...names, [`player${i}`]: e.target.value })
              }
            />
          ))}
        </div>
        {Object.keys(points).map(
          (key: keyof State) =>
            key !== 'total' && (
              <div
                key={`point-${key}`}
                className="flex items-center justify-between mt-4"
              >
                <span className="px-2 py-1 mr-2 text-lg border rounded-lg bg-amber-100 border-amber-700">
                  {points[key].icon}
                </span>
                {[1, 2].map(i => (
                  <div
                    key={`player-${i}-${key}`}
                    className="flex items-center justify-between space-x-2"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        dispatchPoints({
                          type: 'decrement',
                          player: i as 1 | 2,
                          key,
                        })
                      }
                      className={clsx(
                        'inline-flex items-center text-white border border-transparent rounded py-2 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
                        i === 1
                          ? 'focus:ring-amber-500 bg-amber-500 hover:bg-amber-700'
                          : 'bg-green-500 hover:bg-green-700 focus:ring-green-500'
                      )}
                    >
                      <MinusIcon className="w-3 h-3" aria-hidden="true" />
                    </button>
                    <span className="space-x-6">
                      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                      <input
                        type="number"
                        name={`qty-player${i}-${key}`}
                        className="inline-block text-sm border-gray-300 w-14 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500"
                        value={
                          points[key][`player${i}` as 'player1' | 'player2']
                        }
                      />
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        dispatchPoints({
                          type: 'increment',
                          player: i as 1 | 2,
                          key,
                        })
                      }
                      className={clsx(
                        'inline-flex items-center text-white border border-transparent rounded py-2 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
                        i === 1
                          ? 'focus:ring-amber-500 bg-amber-500 hover:bg-amber-700'
                          : 'bg-green-500 hover:bg-green-700 focus:ring-green-500'
                      )}
                    >
                      <PlusIcon className="w-3 h-3" aria-hidden="true" />
                    </button>
                  </div>
                ))}
              </div>
            )
        )}
        <p className="px-6 py-12 my-6 text-2xl font-bold text-center border bg-amber-100 rounded-xl border-amber-700">
          {points.total.player1 === points.total.player2 ? (
            t('utilities.points.equal')
          ) : (
            <>
              {
                names[
                  `player${points.total.player1 > points.total.player2 ? 1 : 2}`
                ]
              }{' '}
              {t('utilities.points.win_with')}{' '}
              {Math.max(points.total.player1, points.total.player2)}{' '}
              {t('utilities.points.points')}
            </>
          )}
        </p>
      </>
    </Layout>
  );
};

export default Age;
