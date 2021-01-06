import Link from "next/link";
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Search from '../components/search'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Home.module.css'

export default function sql() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <Layout home>
        <Head>
         <title>{siteTitle}</title>
        </Head>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          {/* <h2 className={utilStyles.headingLg}>pesquisar</h2> */}
          <Search />
        </section>
      </Layout>
      <Link href="/">
        <a className={styles.backToHome}>&larr; voltar</a>
      </Link>
      </main>
    </div>
  )
}