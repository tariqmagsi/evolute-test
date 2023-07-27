import Head from 'next/head';
import { Inter } from 'next/font/google';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import CharacterList from '@/components/characters_list/CharactersList';
import { CharactersProps, CharactersResponseData } from '@/types/characters.type';
import { Service } from '@/config/service';
import { useState } from 'react';
import { Pagination } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

const PAGE_SIZE = 25;

/**
 * Fetch data of characters list with pagination using API => /api/characters.
 * This function is executed on the server side.
 *
 * @param context - The server-side context containing the request and query parameters.
 * @returns The fetched data of characters list with pagination.
 */
export const getServerSideProps: GetServerSideProps<CharactersProps> = async (context) => {
    const { query } = context;
    const page = query.page ? Number(query.page) : 1;

    try {
        const charactersResponse = await Service.characters(`?page=${page}`)
        if (!charactersResponse.ok) {
            throw new Error('Failed to fetch characters.');
        }
        const charactersData: CharactersResponseData = await charactersResponse.json();
        const characters = charactersData.characters;
        const totalCharacters = charactersData.totalCharacter

        return {
            props: {
                characters,
                totalCharacters: totalCharacters
            },

        };
    } catch (error) {
        return {
            props: {
                characters: [],
                totalCharacters: 0
            },
        };
    }
};

/**
 * Functional Component for characters list page/home page.
 *
 * @param {CharactersProps} characters - The fetched characters data from the server-side props.
 * @returns {JSX.Element} - The JSX element representing the characters list page.
 */
const Characters: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ characters, totalCharacters }) => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(router.query?.page ? Number(router.query?.page) : 1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        router.replace({
            pathname: router.pathname,
            query: `page=${page}`
        });
    };

    return (
        <>
            <Head>
                <title>Evolute Test - Characters</title>
                <meta name="description" content="List of the characters" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`min-h-screen flex flex-col justify-between items-center p-24 ${inter.className}`}>
                {characters.length ?
                    <>
                        <div className='mb-4 text-3xl text-900'>Characters</div>
                        <div className="flex flex-row flex-wrap justify-around gap-20 mt-10">
                            <CharacterList characters={characters} />
                        </div>
                    </>
                    :
                    <div>
                        Characters Not Found. Click to go {" "}
                        <Link href={'/'} style={{color: 'blue'}}>
                            Home
                        </Link>
                    </div>
                }
                <div>
                    <Pagination current={currentPage} pageSizeOptions={[]} total={totalCharacters} pageSize={PAGE_SIZE} onChange={handlePageChange} />
                </div>

            </main>
        </>
    )
}

export default Characters
