import { Character } from "@/types/global.type";

export interface CharactersProps {
    characters: Character[];
    totalCharacters: number;
}

export interface CharactersResponseData {
    characters: Character[];
    totalCharacter: number;
} 