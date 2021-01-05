import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Search from '../components/search'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <Layout home> 
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Search</h2>
        <Search />
      </section>
    </Layout>
    </div>
  )
}