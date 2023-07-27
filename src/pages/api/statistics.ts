import { getLocationWithMostHumans, getMostAssignedStatus, getSpeciesWithMostMales, getTopCharacters } from '@/utils/apiHelper';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    try {
        const topCharacters = getTopCharacters();
        const mostAssignedStatus = getMostAssignedStatus()
        const locationWithMostHumans = getLocationWithMostHumans()
        const speciesWithMostMales = getSpeciesWithMostMales()

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