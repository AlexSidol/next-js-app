import Head from 'next/head';
import React from 'react';
import Heading from '../components/Heading';
import Socials from '../components/Socials';
import styles from '../styles/Home.module.scss';


export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
     return {
    props: { socials: data },
  };
  } catch (error) {
    return {
    props: { socials: null },
  };
  }
  
};


const Home = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading text='Next.js Application' />
      <Socials socials={socials} />
    </div>
  )
}
export default Home;