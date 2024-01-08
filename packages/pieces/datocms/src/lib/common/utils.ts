import camelCase from 'lodash/camelCase';
import startCase from 'lodash/startCase';

export const getLinkHelperText = (validations: any[]) => {
    const validTypes: string[] = validations?.find(v => v['someValidationType'])?.['someValidationType'] || [];

    return startCase(camelCase(validTypes.join(',')));
};

