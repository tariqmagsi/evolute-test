import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/pages/_layout';
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
