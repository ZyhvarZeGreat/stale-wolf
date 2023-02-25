import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {



  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.cdnfonts.com/css/gt-walsheim" rel="stylesheet" />
      </Head>


      <body className="flex items-center justify-center">
        <svg className='absolute -z-10 opacity-20' viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'>
          <filter id='noiseFilter'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='3.5'
              numOctaves='6'
              stitchTiles='stitch' />
          </filter>

          <rect width='100vh' height='100vh' filter='url(#noiseFilter)' />
        </svg>
        <Main />
        <NextScript />
      </body>


    </Html>




  );
}
