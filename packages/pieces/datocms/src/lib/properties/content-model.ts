import { DropdownOption, Property } from '@activepieces/pieces-framework';
import _ from 'lodash';
import { DatocmsAuth, makeClient } from '../common';

const DatoModel = Property.Dropdown<string>({
    displayName: 'DatoCMS Model',
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
            const models: DropdownOption<string>[] = [];
            const query = `{
        allModels {
          id
          name
        }
      }`;

            const response = await client.request(query);
            response.allModels.forEach(model => {
                models.push({
                    value: model.id,
                    label: model.name
                });
            });

            return {
                disabled: false,
                options: models.sort((a, b) =>
                    a.label < b.label ? -1 : a.label > b.label ? 1 : 0
                ),
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

export default DatoModel;
