import { DropdownOption, Property } from '@activepieces/pieces-framework';
import _ from 'lodash';
import { DatocmsAuth, makeClient } from '../common';

const DatoLocale = Property.Dropdown({
    displayName: 'DatoCMS Locale',
    required: true,
    refreshers: [],
    options: async ({ auth }) => {
        if (_.isEmpty(auth)) {
            return {
                disabled: true,
                options: [],
                placeholder: 'Please connect your account',
            };
        }
        const client = makeClient(auth as DatocmsAuth).client;
        try {
            const query = `{
        allLocales {
          code
          name
        }
      }`;

            const response = await client.request(query);
            const options: DropdownOption<string>[] = response.allLocales.map(
                (locale) => ({ label: locale.name, value: locale.code })
            );
            return {
                disabled: false,
                options,
            };
        } catch (e) {
            console.debug(e);
            return {
                disabled: true,
                options: [],
                placeholder: 'Please check your DatoCMS connection settings',
            };
        }
    },
});

export default DatoLocale;
