import { DatocmsAuth } from './auth';
import { SiteClient } from 'datocms-client';

export const makeClient = (auth: DatocmsAuth) => {
    return {
        client: new SiteClient(auth.apiKey),
    };
};

