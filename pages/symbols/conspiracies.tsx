import React from 'react';
import { useTranslation } from 'react-i18next';

import Layout from '../../components/Layout';

const Age = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t(`symbols.conspiracies.title`)} container>
      <table className="border-t border-gray-200 table-auto">
        <tbody>
          {(
            t('symbols.conspiracies.items', { returnObjects: true }) as {
              desc: string;
              image: string;
            }[]
          )?.map(({ desc, image }) => (
            <tr key={image}>
              <td className="py-6 align-top border-b border-gray-300">
                <div className="w-12 h-12">
                  <img
                    className="object-contain object-right w-12 h-12"
                    src={`/images/symbols/conspiracies/${image}`}
                    alt={desc}
                  />
                </div>
              </td>
              <td className="py-6 pl-4 align-top border-b border-gray-300 whitespace-3rap">
                <p className="text-sm text-gray-900">{desc}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Age;
