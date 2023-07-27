import { NextApiRequest, NextApiResponse } from 'next';
import { getCharacters } from '@/utils/apiHelper';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { page = 1, pageSize = 25 } = req.query;
        const characters = getCharacters(Number(page), Number(pageSize));
        res.status(200).json(characters);
    } catch(error) {
        res.status(500).json({ message: 'An error occurred while fetching characters.' });
    }
}