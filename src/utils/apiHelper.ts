import charactersData from '@/data/evo-task-data.json';

//get all characters
export function getCharacters(page: number, pageSize: number) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const characters = charactersData.slice(startIndex, endIndex);

    if (characters.length === 0) {
        throw new Error('No characters found.');
    }

    return characters;
}

//get top 3 characters appeared in most episodes
export function getTopCharacters() {
    const sortedCharactersByEpisodes = [...charactersData].sort((a, b) => b.episode.length - a.episode.length);
    const topCharacters = sortedCharactersByEpisodes.slice(0, 3).map((character) => ({
        id: character.id,
        name: character.name,
        episodeCount: character.episode.length,
    }));

    if (topCharacters.length === 0) {
        throw new Error('No top 3 characters appeared in most episodes.');
    }

    return topCharacters;
}

//get status that is assigned to the most characters
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

//get location with the most characters of the species “human”
export function getLocationWithMostHumans() {
    const humanCharacters = charactersData.filter((character) => character.species === 'Human');
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

//get species with the most male characters
export function getSpeciesWithMostMales() {
    const maleCharacters = charactersData.filter((character) => character.gender === 'Male');
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