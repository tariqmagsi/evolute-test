import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';
import { Character } from '@/types/global.type';

/**
 * CharacterCard Component
 *
 * This component represents a card for displaying character information.
 *
 * @param {Character} character - The details of the character to be displayed.
 * @returns {JSX.Element} - The JSX element representing the CharacterCard.
 */
const CharacterCard: React.FC<Character> = ({ id, image, name, status }) => {
    return (
        <div key={id} className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-4 lg:p-6">
            <Link href={`/characters/${id}`}>
                <Card>
                    <picture>
                        <img className="w-full mb-4 rounded" src={image} alt={name} />
                    </picture>
                    <p className="font-bold">Name: {name}</p>
                    <p>Status: {status}</p>
                </Card>
            </Link>
        </div>
    );
};

export default CharacterCard;