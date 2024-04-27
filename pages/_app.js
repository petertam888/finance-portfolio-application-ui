import "@/styles/globals.css";
import { BackendUrlProvider } from '../context/BackendUrlContext';
import { Roboto } from "next/font/google"


const roboto = Roboto({
  subsets: ['latin'],
  weight: ["400", "700"],
})
export default function App({ Component, pageProps }) {
  
  return <BackendUrlProvider>
    <main className={roboto.className}>
      <Component {...pageProps} />
      </main>
    </BackendUrlProvider>;
}
