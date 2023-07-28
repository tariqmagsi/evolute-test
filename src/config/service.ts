import { get, Apis } from '.';

/**
 * Service object with API requests
 */
export const Service = {
    characters: async (query: string): Promise<Response> => {
        let result = await get(Apis.characters + query);
        if (result?.status === 200) return result;
        else throw result;
    },
    statistics: async (): Promise<Response> => {
        let result = await get(Apis.statistics);
        if (result?.status === 200) return result;
        else throw result;
    }
};

