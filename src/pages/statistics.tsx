import Head from 'next/head'
import { Inter } from 'next/font/google'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import CharacterList from '@/components/CharactersList/CharactersList';
import { Card } from 'antd';

const inter = Inter({ subsets: ['latin'] })

export const getServerSideProps: GetServerSideProps = async ( ) => {
    try {
        const charactersStatisticsResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/statistics`);
        if (!charactersStatisticsResponse.ok) {
            throw new Error('Failed to fetch charactersStatistics.');
        }
        const charactersStatistics = await charactersStatisticsResponse.json();

        return {
            props: {
                charactersStatistics,
            },
        };
    } catch (error) {
        return {
            props: {
                charactersStatistics: [],
                error: 'An error occurred while fetching charactersStatistics.'
            },
        };
    }
};

const Statistics: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ charactersStatistics }) => {
    return (
        <>
            <Head>
                <title>Evolute Test - Statistics</title>
                <meta name="description" content="Show statistics." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`min-h-screen p-24 ${inter.className}`}>
                <h1 style={{textAlign: 'center'}}>Statistics</h1>
                <br/>
                <Card>
                    <b>Top Characters:</b>
                    <CharacterList characters={charactersStatistics.topCharacters} />
                </Card>
                <br />
                <Card><b>Most Assigned Status:</b><div>{charactersStatistics.mostAssignedStatus}</div></Card>
                <br />
                <Card><b>Location With Most Humans:</b><div>{charactersStatistics.locationWithMostHumans}</div></Card>
                <br />
                <Card><b>Species With Most Males:</b><div>{charactersStatistics.speciesWithMostMales}</div></Card>
            </main>
        </>
    )
}

export default Statistics
