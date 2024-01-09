/* import { Property, createAction } from "@activepieces/pieces-framework";
import { DatocmsAuth, PropertyKeys, makeClient } from "../../common";

export const DatocmsGetRecordAction = createAction({
    name: 'datocms_record_get',
    auth: DatocmsAuth,
    displayName: 'Get Record from DatoCMS',
    description: 'Gets a DatoCMS record for a given Model',
    props: {
        [PropertyKeys.ENTITY_ID]: Property.ShortText({
            displayName: 'Record ID',
            required: true,
            description: 'The ID of the record to get in DatoCMS.',
        }),
        [PropertyKeys.MODEL_ID]: Property.ShortText({
            displayName: 'Model ID',
            required: true,
            description: 'The ID of the model in DatoCMS.',
        }),
    },
    async run({ auth, propsValue }) {
        const client = makeClient(auth); // Stellen Sie sicher, dass makeClient für DatoCMS funktioniert
        const recordId = propsValue[PropertyKeys.ENTITY_ID] as string;

        // Verwenden Sie eine GraphQL-Abfrage, um den Datensatz zu erhalten
        const query = `query GetRecord($id: ItemId) {
          item: modelId(id: $id) {
            // Fügen Sie hier optionale Felder ein
          }
        }`;
        const variables = { id: recordId };

        return await client.request(query, variables); // Verwenden Sie request, um die GraphQL-Abfrage zu senden
    }
}); */
