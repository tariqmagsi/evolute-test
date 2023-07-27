import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

interface Character {
  id: number;
  name: string;
  status: string;
}

interface CharacterListProps {
  characters: Character[];
}

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