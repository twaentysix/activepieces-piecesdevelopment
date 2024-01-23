import { createAction, Property } from '@activepieces/pieces-framework';
import { DatoCmsAuth } from '../common';
import { makeDatoClient } from '../common/client';

export const DatoCMSFetchAction = createAction({
  name: 'datocms_fetch',
  displayName: 'Fetch Data from DatoCMS',
  description: 'Fetches data from a DatoCMS project using a Read-Only API Token',
  props: {
    recordID: Property.ShortText({
      displayName: 'Record ID',
      description: 'The ID of the record you wish to fetch',
      required: true,
    }),
  },

  async run({ auth, propsValue }) {
    const { recordID } = propsValue;
    const client = makeDatoClient(auth as DatoCmsAuth);

    try {
      const data = await client.fetchData(recordID);
      return data;
    } catch (error) {
      console.error('Error fetching data from DatoCMS:', error);
      throw error;
    }
  },
});
