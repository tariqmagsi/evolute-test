import { NextApiRequest, NextApiResponse } from 'next';
import { getCharacters } from '@/utils/apiHelper';

/**
 * API Route for getting Characters List with a limit per page.
 *
 * @param req - The HTTP request object.
 * @param res - The HTTP response object.
 * @returns Characters list with a limit along with the total number of characters.
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const pageSize = 25;
        const { page = 1 } = req.query;
        const characters = getCharacters(Number(page), Number(pageSize));
        res.status(200).json(characters);
    } catch(error) {
        res.status(500).json({ message: 'An error occurred while fetching characters.' });
    }
}