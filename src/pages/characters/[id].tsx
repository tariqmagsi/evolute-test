import Head from 'next/head'
import { Inter } from 'next/font/google'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Card } from 'antd';
import { CharacterProps } from '@/types/character/[id].type';
import { Service } from '@/config/service';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })


/**
 * Fetch data of character using api => /api/characters/[id]
 *
 * @param context - The route parameters containing the character ID.
 * @returns - The server-side props containing the character data.
 */
export const getServerSideProps: GetServerSideProps<CharacterProps> = async (context) => {
    try {
        const { params } = context
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
                character: null
            },
        };
    }
};

/**
 * Functional Component for details page of character
 *
 * @param {CharacterProps} character - The character data obtained from the server-side props.
 * @returns {JSX.Element} - The JSX element representing the character detail page.
 */
const CharacterDetail: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ character }: CharacterProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>Evolute Test - Character Detail</title>
                <meta name="description" content="Character detail" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`min-h-screen flex flex-col justify-between items-center p-24 ${inter.className}`}>
                {character ?
                    <>
                        <div className='mb-4 text-3xl text-900'>{character.name}</div>
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
                        Character Not Found. Click to go {" "}
                        <Link href={'/'} style={{color: 'blue'}}>
                            Home
                        </Link>
                    </div>
                }
            </main>
        </>
    )
}

export default CharacterDetail
