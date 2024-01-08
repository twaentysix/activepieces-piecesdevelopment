import { DynamicPropsValue, Property } from '@activepieces/pieces-framework';
import { DatocmsAuth, PropertyKeys, makeClient } from '../common';
import _ from 'lodash';
import { FieldTransformers } from './transformers';

const DynamicFields = Property.DynamicProperties({
    displayName: 'Fields',
    description: 'Fields for DatoCMS Model',
    required: true,
    refreshers: [PropertyKeys.MODEL_ID, PropertyKeys.LOCALE],
    props: async ({
                      auth,
                      [PropertyKeys.MODEL_ID]: modelId,
                      [PropertyKeys.LOCALE]: locale,
                  }) => {
        if (_.isEmpty(auth) || _.isNil(modelId)) return {};
        const dynamicFields: DynamicPropsValue = {};
        const client = makeClient(auth as DatocmsAuth).client;
        try {
            const query = `{
        model(id: "${modelId}") {
          fields {

          }
        }
      }`;

            const response = await client.request(query);
            const model = response.model;

            // Logik zur Transformation und Hinzufügen von Feldern zu dynamicFields
            // basierend auf den erhaltenen Feldinformationen von DatoCMS
            model.fields.forEach(f => {
                // Beispiel: Verwenden Sie einen Transformer basierend auf dem Feldtyp
                const transformer = FieldTransformers[f.type]; // Passen Sie FieldTransformers entsprechend an
                if (transformer) {
                    dynamicFields[f.id] = transformer(f);
                } else {
                    dynamicFields[f.id] = Property.ShortText({ // Standardfall für nicht unterstützte Feldtypen
                        displayName: f.name,
                        description: 'Unsupported Field Type',
                    });
                }
            });
        } catch (e) {
            console.debug(e);
        }
        return dynamicFields;
    },
});

export default DynamicFields;
