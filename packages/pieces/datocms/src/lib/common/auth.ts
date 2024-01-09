import { PieceAuth, Property } from '@activepieces/pieces-framework';
import {buildClient} from "@datocms/cma-client-node";

export interface DatocmsAuth {
    apiKey: string;
}

export const DatocmsAuth = PieceAuth.CustomAuth({
    required: true,
    props: {
        apiKey: Property.ShortText({
            displayName: 'DatoCMS API Key',
            required: true
        }),
    },
});
