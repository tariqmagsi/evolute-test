import { NextApiRequest, NextApiResponse } from 'next';
import { getCharacter } from '@/utils/apiHelper';


/**
 * API Route for getting character data by ID.
 *
 * @param req - The HTTP request object.
 * @param res - The HTTP response object.
 * @returns Character data for the specified ID if found; otherwise, a 404 response.
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { id } = req.query;
        const character = getCharacter(Number(id));

        if(!character) {
            res.status(404).json({ message: 'Character not found' })
        }

        res.status(200).json(character);
    } catch(error) {
        res.status(500).json({ message: 'An error occurred while fetching characters.' });
    }
}