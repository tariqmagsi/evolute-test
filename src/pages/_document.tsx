import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Custom Document Component
 *
 * This is a custom Next.js document component used for server-side rendering.
 *
 * @returns {JSX.Element} - The JSX element representing the custom document structure.
 */
export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
