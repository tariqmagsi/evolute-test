const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const Apis = {
    characters: '/api/characters',
    statistics: '/api/statistics'
}

/**
 * GET Request
 *
 * @param {string} endPoint - The API endpoint to make the GET request to.
 * @returns {Promise<Response>} - The response object representing the result of the GET request.
 */
export const get = async (endPoint: string) => {
    try {
        const characters = await fetch(BASE_URL + endPoint);
        return characters;
    } catch (e) {
        console.log('post -> e', e);
        throw e;
    }
};