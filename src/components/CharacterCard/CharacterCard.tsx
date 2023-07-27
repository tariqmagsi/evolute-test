import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';

interface Character {
    id: number;
    name: string;
    status: string;
}

const CharacterCard: React.FC<Character> = ({ id, name, status }) => {
    return (
        <div key={id} className="p-4 bg-white rounded shadow">
            <Card>
                <Link href={`/characters/${id}`}>
                    <p className="font-bold">Name: {name}</p>
                    <p>Status: {status}</p>
                </Link>
            </Card>
        </div>
    );
};

export default CharacterCard;