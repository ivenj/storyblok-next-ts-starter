import '../styles/globals.css'
import type { AppProps } from 'next/app'

//@ts-ignore
import { storyblokInit, apiPlugin } from '@storyblok/react'

// Components
import Feature from '../components/Feature'
import Grid from '../components/Grid'
import Page from '../components/Page'
import Teaser from '../components/Teaser'

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
}

storyblokInit({
  accessToken: process.env.STORYBLOK_PREIVEW_TOKEN,
  use: [apiPlugin],
  components,
})

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
