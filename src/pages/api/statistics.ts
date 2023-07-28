import { Character } from '@/types/global.type';
import { getLocationWithMostHumans, getMostAssignedStatus, getSpeciesWithMostMales, getTopCharacters } from '@/utils/apiHelper';
import { NextApiRequest, NextApiResponse } from 'next';

/**
 * API Route for getting statistics of characters.
 *
 * @param _req - The HTTP request object. (Note: Not used in this function.)
 * @param res - The HTTP response object.
 * @returns Statistics of characters, including top characters, most assigned status, location with most humans, and species with most males.
 */
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    try {
        const topCharacters: Character[] = getTopCharacters();
        const mostAssignedStatus: string = getMostAssignedStatus()
        const locationWithMostHumans: string = getLocationWithMostHumans()
        const speciesWithMostMales: string = getSpeciesWithMostMales()

        res.status(200).json({
            topCharacters,
            mostAssignedStatus,
            locationWithMostHumans,
            speciesWithMostMales,
        });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching characters.' });
    }
}