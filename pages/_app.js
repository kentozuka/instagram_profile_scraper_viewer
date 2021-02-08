import '../styles/globals.css'
import DefaultLayout from '../layouts/default'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : DefaultLayout;
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
