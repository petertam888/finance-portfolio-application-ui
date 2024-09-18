import "@/styles/globals.css";
import { BackendUrlProvider } from '../context/BackendUrlContext';
import { Roboto } from "next/font/google";
import Layout from '../components/Layout';
import { ThemeProvider } from '../context/ThemeContext';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <BackendUrlProvider>
        <Layout>
          <main className={roboto.className}>
            <Component {...pageProps} />
          </main>
        </Layout>
      </BackendUrlProvider>
    </ThemeProvider>
  );
}
