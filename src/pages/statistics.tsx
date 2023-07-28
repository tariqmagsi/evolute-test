import Head from 'next/head'
import { Inter } from 'next/font/google'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Card } from 'antd';
import { StatisticsProps } from '@/types/statistics.type';
import Link from 'next/link';
import { Service } from '@/config/service';

const inter = Inter({ subsets: ['latin'] })

/**
 * Fetch data of characters statistics using API => /api/statistics.
 * This function is executed on the server side.
 *
 * @returns The fetched data of characters statistics.
 */
export const getServerSideProps: GetServerSideProps<StatisticsProps> = async () => {
    try {
        const charactersStatisticsResponse = await Service.statistics()
        if (!charactersStatisticsResponse.ok) {
            throw new Error('Failed to fetch characters.');
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
                // error: 'An error occurred while fetching charactersStatistics.'
            },
        };
    }
};

/**
 * Functional Component for the statistics page.
 *
 * @param {StatisticsProps} charactersStatistics - The fetched characters statistics data from the server-side props.
 * @returns {JSX.Element} - The JSX element representing the statistics page.
 */
const Statistics: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ charactersStatistics }: StatisticsProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>Evolute Test - Statistics</title>
                <meta name="description" content="Show statistics." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`min-h-screen flex flex-col w-full items-center p-24 ${inter.className}`}>
                <div className='mb-4 text-3xl text-900'>Statistics</div>
                <Card>
                    <b>Top Characters:</b>
                    <div className='flex flex-row flex-wrap justify-around'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {charactersStatistics.topCharacters.map(char => (
                                <Link href={`/characters/${char.id}`} key={char.id}>
                                    <Card>
                                        <picture>
                                            <img className="w-full mb-4 rounded" src={char.image} alt={char.name} />
                                        </picture>
                                        <b>Name:</b> {char.name}
                                        <br />
                                        <b>Status:</b> {char.status}
                                        <br />
                                        <b>Episodes Count:</b> {char.episode?.length}
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Card>
                <br />
                <Card className='w-full'><b>Most Assigned Status:</b><div>{charactersStatistics.mostAssignedStatus}</div></Card>
                <br />
                <Card className='w-full'><b>Location With Most Humans:</b><div>{charactersStatistics.locationWithMostHumans}</div></Card>
                <br />
                <Card className='w-full'><b>Species With Most Males:</b><div>{charactersStatistics.speciesWithMostMales}</div></Card>
            </main>
        </>
    )
}

export default Statistics
