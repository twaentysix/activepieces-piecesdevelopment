import { DropdownState, Property } from '@activepieces/pieces-framework';
import { DatocmsAuth, PropertyKeys, makeClient } from '../common';
import _ from 'lodash';

const DatoSelectFields = Property.MultiSelectDropdown({
    displayName: 'Return Fields',
    description: 'The fields to return for each record.',
    refreshers: [PropertyKeys.MODEL_ID],
    required: false,
    options: async ({ auth, [PropertyKeys.MODEL_ID]: modelId }) => {
        const searchFields: DropdownState<string> = {
            options: [],
            disabled: true,
            placeholder: '',
        };

        if (_.isEmpty(auth) || _.isNil(modelId)) return searchFields;

        try {
            const client = makeClient(auth as DatocmsAuth).client;
            const query = `{
        model(id: "${modelId}") {
          fields {
            id
            name
            // Weitere relevante Feldinformationen hier
          }
        }
      }`;

            const response = await client.request(query);
            const model = response.model;

            // Verarbeitung der verfügbaren Optionen
            searchFields.options = model.fields.map(f => ({
                label: f.name,
                value: `fields.${f.id}`,
            }));
            searchFields.disabled = false;
            searchFields.placeholder = 'Select fields to return';
        } catch (e) {
            console.debug(e);
        }
        return searchFields;
    },
});

export default DatoSelectFields;
