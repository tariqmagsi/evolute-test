import { Character } from "@/types/global.type";

export interface Statistics {
    topCharacters: Character[];
    mostAssignedStatus: number;
    locationWithMostHumans: string;
    speciesWithMostMales: string;
}

export interface StatisticsProps {
    charactersStatistics: Statistics
}