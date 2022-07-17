import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import News from './news.mdx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
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
            <a href='https://chromia.com'>Chromia</a> Senior Marketing Lead
          </h2>
        </div>
        <div className={styles.newsWrapper}>
          <News />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='mailto:anastasia.plane@chromaway.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            icon={faMailBulk}
            style={{
              fontSize: 18,
              color: '#343a40',
              paddingRight: '10px',
              position: 'relative',
              top: '2px',
            }}
          />{' '}
          anastasia.plane@chromaway.com
        </a>
      </footer>
    </div>
  );
}
