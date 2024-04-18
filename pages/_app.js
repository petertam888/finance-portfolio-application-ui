import "@/styles/globals.css";
import { BackendUrlProvider } from '../context/BackendUrlContext';

export default function App({ Component, pageProps }) {
  
  return <BackendUrlProvider>
      <Component {...pageProps} />
    </BackendUrlProvider>;
}
