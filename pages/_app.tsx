import type { AppProps } from 'next/app'

// styles
import '../styles/globals.css'
import variables from '../styles/variables.module.scss';

// containers
import { Header } from "../containers/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp