import type { AppProps } from 'next/app';
import Head from 'next/head';
import {CssBaseline, ThemeProvider} from '@mui/material';
import { SWRConfig } from 'swr';

import { UIProvider } from '../context';
import { lightTheme } from '../themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
    }}>
      <UIProvider>
        <ThemeProvider theme={lightTheme}>
          <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </SWRConfig>
  );
}

export default MyApp;
