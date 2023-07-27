import { get } from '.';

export const Service = {
    searchMovie: async (endPoint: string) => {
        let result = await get(endPoint);
        if (result.status === 200) return result.data;
        else throw result;
    }
};

