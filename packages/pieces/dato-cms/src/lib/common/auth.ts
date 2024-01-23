import { PieceAuth, Property } from '@activepieces/pieces-framework';

export interface DatoCmsAuth {
    apiToken: string;
}

export const DatoCmsAuth = PieceAuth.CustomAuth({
    required: true,
    props: {
        apiToken: Property.ShortText({
            displayName: 'DatoCMS API Token',
            required: true,
        }),
    },
});