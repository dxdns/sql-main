import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
/* import styled from 'styled-components'
import Button from 'react-bootstrap/Button'; */

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>dxdns</title>
        <link rel="icon" href="/dxdns.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          dxdns
        </h1>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          <Link href="https://www.mediafire.com/folder/bcu79uctwhxr7/release">
            <a target="_blank" className={styles.card}>
              <h3>releases &rarr;</h3>
              <p>Instalador e atualizações, alternativa completa.</p>
            </a>
          </Link>

          <Link href="sql">
            <a className={styles.card}>
              <h3>sql &rarr;</h3>
              <p>Lista de comandos mais utilizados no sistema host.</p>
            </a>
          </Link>

          <Link href="https://www.mediafire.com/folder/ng6g68a6p5ds4">
            <a target="_blank" className={styles.card}>
              <h3>ferramentas &rarr;</h3>
              <p>Para gerenciar e fazer manutenção na base de dados.</p>
            </a>
          </Link>

          <Link href="https://www.mediafire.com/folder/zs37hgcwpewka/tutoriais">
          <a
            target="_blank"
            className={styles.card}
          >
            <h3>tutoriais &rarr;</h3>
            <p>
              Adquirir conhecimento com conteúdo em pdf e vídeo.
            </p>
          </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/dxdns"
          target="_blank"
          rel="noopener noreferrer"
        >
          	&#169;{' dxdns '}
          {/* <img src="/logo50x50.png" alt="logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  )
}
