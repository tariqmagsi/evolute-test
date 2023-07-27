import { Character } from '@/types/global.type';
import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

export interface CharacterListProps {
  characters: Character[];
}

/**
 * CharacterList Component
 *
 * This component represents a list of characters.
 *
 * @param {CharacterListProps} characters - The list of characters to be displayed.
 * @returns {JSX.Element} - The JSX element representing the CharacterList.
 */
const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters.map((character) => (
        <CharacterCard {...character} key={character.id} />
      ))}
    </div>
  );
};

export default CharacterList;