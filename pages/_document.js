import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script'

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossorigin href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          onload="this.onload=null;this.rel='stylesheet'"
          rel="stylesheet preload prefetch"
        />
        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap"
          onload="this.onload=null;this.rel='stylesheet'"
          rel="stylesheet preload prefetch"
        />
        <meta content="black" name="theme-color" />
        <Head>
          {/* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-P90QTKZYJ3"
          ></script>
          <script
            id="google-analytics"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P90QTKZYJ3');
            `,
            }}
          />
        </Head>
        <body>
          <SpeedInsights />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
