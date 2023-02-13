import { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="initial-scale=1,width=device-width" />
                <meta name="format-detection" content="email=no,telephone=no" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
