export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    created: string;
    gender: string;
    location: {
        name: string;
    };
    episode: string[];
    image: string;
}