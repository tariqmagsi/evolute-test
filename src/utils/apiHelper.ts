import charactersData from '@/data/evo-task-data.json';
import { Character } from '@/types/global.type';

/**
 * Get Characters List
 *
 * @param {number} page - The current page of characters list.
 * @param {number} pageSize - The number of characters per page.
 * @returns {Object} - An object containing the characters list and the total number of characters.
 */
export function getCharacters(page: number, pageSize: number) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const characters: Character[] = charactersData.slice(startIndex, endIndex);

    return {characters, totalCharacter: charactersData.length};
}

/**
 * Get Character
 *
 * @param {number} id - The ID of the character.
 * @returns {Character | undefined | null} - The character data, or undefined if the character is not found.
 */
export function getCharacter(id: number) {
    const character = charactersData.find(char => char.id === id);
    
    return character;
}


/**
 * Get top 3 characters appeared in most episodes
 *
 * @returns {Character[]} - An array of the top 3 characters that appeared in the most episodes.
 */
export function getTopCharacters() {
    const sortedCharactersByEpisodes = [...charactersData].sort((a, b) => b.episode.length - a.episode.length);
    const topCharacters = sortedCharactersByEpisodes.slice(0, 3).map((character) => character);

    return topCharacters;
}


/**
 * Get status that is assigned to the most characters
 *
 * @returns {string} - The status that is assigned to the most characters.
 * @throws {Error} - Throws an error if there is no status that is assigned to the most characters.
 */
export function getMostAssignedStatus() {
    const statusCountMap: { [status: string]: number } = {};
    charactersData.forEach((character) => {
        statusCountMap[character.status] = (statusCountMap[character.status] || 0) + 1;
    });
    const mostAssignedStatus = Object.keys(statusCountMap).reduce((a, b) => (statusCountMap[a] > statusCountMap[b] ? a : b));

    if (mostAssignedStatus.length === 0) {
        throw new Error('No status that is assigned to the most characters.');
    }

    return mostAssignedStatus;
}

/**
 * Get location with the most characters of the species “human”
 *
 * @returns {string} - The location with the most characters of the species "human".
 * @throws {Error} - Throws an error if there is no location with the most characters of the species "human".
 */
export function getLocationWithMostHumans() {
    const humanCharacters = charactersData.filter((character) => character.species.toLowerCase() === 'human');
    const locationCountMap: { [location: string]: number } = {};
    humanCharacters.forEach((character) => {
        locationCountMap[character.location.name] = (locationCountMap[character.location.name] || 0) + 1;
    });
    const locationWithMostHumans = Object.keys(locationCountMap).reduce((a, b) =>
        locationCountMap[a] > locationCountMap[b] ? a : b
    );

    if (locationWithMostHumans.length === 0) {
        throw new Error("No location with the most characters of the species 'human'.");
    }

    return locationWithMostHumans;
}

/**
 * Get species with the most male characters
 *
 * @returns {string} - The species with the most male characters.
 * @throws {Error} - Throws an error if there is no species with the most male characters.
 */
export function getSpeciesWithMostMales() {
    const maleCharacters = charactersData.filter((character) => character.gender.toLowerCase() === 'male');
    const speciesCountMap: { [species: string]: number } = {};
    maleCharacters.forEach((character) => {
        speciesCountMap[character.species] = (speciesCountMap[character.species] || 0) + 1;
    });
    const speciesWithMostMales = Object.keys(speciesCountMap).reduce((a, b) =>
        speciesCountMap[a] > speciesCountMap[b] ? a : b
    );

    if (speciesWithMostMales.length === 0) {
        throw new Error('No species with the most male characters.');
    }

    return speciesWithMostMales;
}