import { createAction, Property, PieceAuth } from "@activepieces/pieces-framework";
import { httpClient, HttpMethod } from "@activepieces/pieces-common";

export const fetchFromDatoCMS = createAction({
    name: 'fetch_from_datocms',
    auth: PieceAuth.None(),
    displayName: 'Fetch Data from DatoCMS',
    description: 'Fetches data from a DatoCMS instance using an API key provided by the user',
    props: {
        api_key: Property.Text({
            displayName: 'API Key',
            description: 'Your DatoCMS API Key',
            required: true,
        }),
        // Include other properties as needed
    },
    async run(context) {
        const DATOCMS_API_URL = "https://site-api.datocms.com/";
        const apiKey = context.propsValue['api_key'];

        // Set up headers for DatoCMS API request
        const headers = {
            'Authorization': `Bearer ${apiKey}`,
        };

        // Example: Fetching data from a specific endpoint
        const response = await httpClient.sendRequest({
            method: HttpMethod.GET,
            url: `${DATOCMS_API_URL}your-endpoint`, // Update with the specific endpoint you want to hit
            headers: headers,
        });

        // Handle the response
        // Ensure to handle errors and edge cases properly
        return response.body; // Or process the response as needed
    },
});
