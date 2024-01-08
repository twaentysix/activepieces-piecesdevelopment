import { createPiece } from '@activepieces/pieces-framework';
import { DatocmsAuth } from './lib/common';
import { DatocmsSearchRecordsAction, DatocmsGetRecordAction, DatocmsCreateRecordAction } from './lib/actions/records';

export const datocms = createPiece({
    displayName: 'DatoCMS',
    auth: DatocmsAuth,
    minimumSupportedRelease: '0.0.1',
    logoUrl: 'https://cdn.activepieces.com/pieces/datocms.png',
    authors: ['Sami Salih'],
    actions: [
        DatocmsSearchRecordsAction,
        DatocmsGetRecordAction,
        DatocmsCreateRecordAction
    ],
    triggers: [],
});
