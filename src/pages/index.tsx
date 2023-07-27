import Head from 'next/head'
import { Inter } from 'next/font/google'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import CharacterList from '@/components/CharactersList/CharactersList'

const inter = Inter({ subsets: ['latin'] })

const PAGE_SIZE = 25;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const page = query.page ? Number(query.page) : 1;
    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    try {
        const charactersResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/characters?page=${page}&pageSize=${endIndex}`);
        if (!charactersResponse.ok) {
            console.log(charactersResponse)
            throw new Error('Failed to fetch characters.');
        }
        const characters = await charactersResponse.json();

        return {
            props: {
                characters,
            },
        };
    } catch (error) {
        console.log(error)
        return {
            props: {
                characters: [],
                error: 'An error occurred while fetching characters.'
            },
        };
    }
};

const Characters: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ characters }) => {
    return (
        <>
            <Head>
                <title>Evolute TestBrowser - Search</title>
                <meta name="description" content="Search the Evolute Testdatabase." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`min-h-screen flex flex-col justify-between items-center p-24 ${inter.className}`}>
                <div className="flex flex-row flex-wrap justify-around gap-20 mt-20">
                    <CharacterList characters={characters} />
                </div>
            </main>
        </>
    )
}

export default Characters
