import Link from "next/link";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function test() {
    return (
        <div className={styles.container}>
            <Head>
                <title>sql - dxdns</title>
                <link rel="icon" href="/dxdns.png" />
            </Head>
            <main className={styles.main}>
                <Link href="/">
                    <a className={styles.card}>&larr; voltar</a>
                </Link>
                <h1 className={styles.title}>
                    comandos sql
        </h1>
                <p>Em breve</p>
                {/*  <ul class="post-list">
                <script type="text/javascript" src="/static/gists.js"></script>
                </ul> */}
            </main>

        </div>
    )
} 