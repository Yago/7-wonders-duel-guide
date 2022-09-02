import React from 'react';
import { useTranslation } from 'react-i18next';

import Layout from '../../components/Layout';

const Age = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t(`symbols.progress.title`)} container>
      <table className="border-t border-gray-200 table-auto">
        <tbody>
          {(
            t('symbols.progress.items', { returnObjects: true }) as {
              title: string;
              desc: string;
              image: string;
            }[]
          )?.map(({ title, desc, image }) => (
            <tr key={image}>
              <td className="py-6 align-top border-b border-gray-300">
                <div className="w-16 h-16">
                  <img
                    className="object-contain object-right w-16 h-16 rounded-full"
                    src={`/images/symbols/progress/${image}`}
                    alt={desc}
                  />
                </div>
              </td>
              <td className="py-6 pl-4 align-top border-b border-gray-300 whitespace-3rap">
                <h2 className="text-sm font-bold  text-gray-900">{title}</h2>
                <p className="mt-1 text-sm text-gray-900">{desc}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Age;
