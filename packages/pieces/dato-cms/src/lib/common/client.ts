import { DatoCmsAuth } from "./auth";

const API_ENDPOINT = 'https://site-api.datocms.com/items/';

export const makeDatoClient = (auth: DatoCmsAuth) => {
  return {
    fetchData: async (recordID: string) => {
      const { apiToken } = auth;

      try {
        const response = await fetch(API_ENDPOINT + recordID, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }

        return await response.json();
      } catch (error) {
        console.error('Error fetching data from DatoCMS:', error);
        throw error;
      }
    }
  };
};
