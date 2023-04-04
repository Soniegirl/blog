 import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import News from './news.mdx';
import { SocialIcon } from 'react-social-icons';

export default function Home() {
  return (
    <>
      <div className={styles.banner}>
        <Image
          src={`/anastasia_plane_nftnyc.jpg`}
          alt='Anastasia Plane'
          width='100%'
          height='34%'
          layout='responsive'
          objectFit='contain'
        />
      </div>
      <div className={styles.container}>
        <Head>
          <title>Anastasia Plane</title>
          <meta name='description' content='Senior Marketing Lead' />
          <link rel='icon' href={`/favicon.ico`} />
        </Head>
        <main className={styles.main}>
          <div className={styles.header}>
            <Image
              src={`/ana1.jpg`}
              alt='Anastasia Plane'
              width='128'
              height='128'
              style={{
                display: 'block',
                'border-radius': '50%;',
                'object-fit': 'cover',
              }}
            />
            <h1 className={styles.title}>
              Anastasia{' '}
              <a href='https://www.linkedin.com/in/anastasiaplane/'>Plane</a>
            </h1>
            <h2 className={styles.subTitle}>
              Marketing Professional
            </h2>
          </div>
          <div className={styles.newsWrapper}>
            <News />
          </div>
        </main>

        <footer className={styles.footer}>
          <SocialIcon url='mailto:planeanastasia@gmail.com' />
          <SocialIcon url='https://twitter.com/PlaneAnastasia' />
        </footer>
      </div>
    </>
  );
}
