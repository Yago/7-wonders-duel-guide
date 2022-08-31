import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';

type Props = {
  items: {
    label: string;
    link: string;
  }[];
};

const StackedList = ({ items }: Props): JSX.Element => (
  <div className="overflow-hidden bg-white border-t border-gray-200 shadow sm:rounded-md">
    <ul className="divide-y divide-gray-200">
      {items.map(({ label, link }) => (
        <li key={label}>
          <a href={link} className="block hover:bg-gray-50">
            <div className="flex items-center px-4 py-4">
              <div className="flex items-center flex-1 min-w-0">
                <div className="flex-1 min-w-0 pr-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <p className="text-sm font-medium truncate text-amber-600">
                      {label}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <ChevronRightIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default StackedList;
