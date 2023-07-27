import { get, Apis } from '.';

/**
 * Service object with API requests
 */
export const Service = {
    characters: async (query: string) => {
        let result = await get(Apis.characters + query);
        if (result?.status === 200) return result;
        else throw result;
    },
    statistics: async () => {
        let result = await get(Apis.statistics);
        if (result?.status === 200) return result;
        else throw result;
    }
};

