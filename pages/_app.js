import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 2rem 0 6rem 0;
    padding: 0;
    background-color: lightgray;
    box-sizing: border-box;
  }
`;



const theme = {
  colors: {
    primary: '#0070f3',
  },
};
