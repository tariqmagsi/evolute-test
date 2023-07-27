import Head from 'next/head'
import { Inter } from 'next/font/google'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Card } from 'antd';
import { CharacterProps } from '@/types/character/[id].type';
import { Service } from '@/config/service';

const inter = Inter({ subsets: ['latin'] })


/**
 * Fetch data of character using api => /api/characters/[id]
 *
 * @param {object} params - The route parameters containing the character ID.
 * @returns {object} - The server-side props containing the character data.
 */
export const getServerSideProps: GetServerSideProps<CharacterProps> = async ({ params }) => {
    try {
        const id = params?.id

        const charactersResponse = await Service.characters(`/${id}`)
        if (!charactersResponse.ok) {
            throw new Error('Failed to fetch characters.');
        }
        const character = await charactersResponse.json();

        return {
            props: {
                character,
            },
        };
    } catch (error) {
        return {
            props: {
                character: [],
            },
        };
    }
};

/**
 * Functional Component for details page of character
 *
 * @param {object} character - The character data obtained from the server-side props.
 * @returns {JSX.Element} - The JSX element representing the character detail page.
 */
const CharacterDetail: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ character }) => {
    return (
        <>
            <Head>
                <title>Evolute Test - Character Detail</title>
                <meta name="description" content="List of the character" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`min-h-screen flex flex-col justify-between items-center p-24 ${inter.className}`}>
                {character.id ?
                    <>
                        <div className='mb-4 text-3xl text-gray-900'>{character.name}</div>
                        <div className="block sm:gap-10">
                            <picture>
                                <img className="w-full mb-4 rounded" src={character.image} alt={character.name} />
                            </picture>
                            <Card>
                                <div className='text-left'>
                                    <p>Name: {character.name}</p>
                                    <p>Status: {character.status}</p>
                                    <p>Species: {character.species}</p>
                                    <p>Gender: {character.gender}</p>
                                    <p>Location: {character.location?.name}</p>
                                    <p>Episodes: {character.episode?.length}</p>
                                    <p>Created at: {character.created?.split('T')[0]}</p>
                                </div>
                            </Card>
                        </div>
                    </>
                    :
                    <div>
                        Character Not Found
                    </div>
                }
            </main>
        </>
    )
}

export default CharacterDetail
