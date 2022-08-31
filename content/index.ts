import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

import conspiracy_trigger_fr from './fr/my_turn/before/conspiracy_trigger.md';
import mythology_token_fr from './fr/my_turn/before/mythology_token.md';
import build_building_fr from './fr/my_turn/turn/build_building.md';
import build_great_temple_fr from './fr/my_turn/turn/build_great_temple.md';
import build_wonder_fr from './fr/my_turn/turn/build_wonder.md';
import conspiracy_preparation_fr from './fr/my_turn/turn/conspiracy_preparation.md';
import earn_fr from './fr/my_turn/turn/earn.md';
import pantheon_fr from './fr/my_turn/turn/pantheon.md';
import senator_fr from './fr/my_turn/turn/senator.md';
import age_i_fr from './fr/setup/age_i.md';
import age_ii_fr from './fr/setup/age_ii.md';
import age_iii_fr from './fr/setup/age_iii.md';
import fr from './fr.json';

i18next.use(initReactI18next).init(
  {
    lng: 'fr',
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react
      format: (value, format) => {
        if (format === 'uppercase') return value.toUpperCase();
        if (format === 'lowercase') return value.toLowerCase();
        return value;
      },
    },
    resources: {
      fr: {
        translation: {
          ...fr,
          pages: {
            age_i: age_i_fr,
            age_ii: age_ii_fr,
            age_iii: age_iii_fr,
            conspiracy_trigger: conspiracy_trigger_fr,
            mythology_token: mythology_token_fr,
            senator: senator_fr,
            earn: earn_fr,
            pantheon: pantheon_fr,
            build_wonder: build_wonder_fr,
            conspiracy_preparation: conspiracy_preparation_fr,
            build_great_temple: build_great_temple_fr,
            build_building: build_building_fr,
          },
        },
      },
    },
  },
  err => {
    if (err) console.log('I18Next error :', err);
  }
);

export default i18next;
