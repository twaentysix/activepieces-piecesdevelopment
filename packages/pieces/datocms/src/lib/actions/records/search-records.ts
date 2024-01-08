import {
    Property,
    createAction,
} from '@activepieces/pieces-framework';
import { DatocmsAuth, PropertyKeys, makeClient } from '../../common';
import { DatoCmsProperty } from '../../properties';

export const DatocmsSearchRecordsAction = createAction({
    name: 'datocms_record_search',
    auth: DatocmsAuth,
    displayName: 'Search Records in DatoCMS',
    description: 'Searches for records of a given Model in DatoCMS',
    props: {
        [PropertyKeys.MODEL_ID]: DatoCmsProperty.ModelId,
        [PropertyKeys.LOCALE]: DatoCmsProperty.Locale,
        [PropertyKeys.GRAPHQL_QUERY]: Property.String({
            required: true,
            displayName: 'GraphQL Query',
            description: 'The GraphQL query to search for records in DatoCMS',
        }),
        // Weitere DatoCMS-spezifische Abfrageparameter
    },
    async run({ auth, propsValue }) {
        const client = makeClient(auth);

        const graphqlQuery = propsValue[PropertyKeys.GRAPHQL_QUERY] as string;

        return await client.request(graphqlQuery, {
            variables: {
                modelId: propsValue[PropertyKeys.MODEL_ID],
                locale: propsValue[PropertyKeys.LOCALE],
            }
        });
    },
});
