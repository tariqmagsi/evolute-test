import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/pages/_layout';
import 'tailwindcss/tailwind.css';



/**
 * App Component
 *
 * The root component of the Next.js application.
 *
 * @param {AppProps} props - The component props, including the `Component` and `pageProps`.
 * @returns {JSX.Element} - The JSX element representing the root component of the application.
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
