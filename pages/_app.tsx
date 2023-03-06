import { AppProps } from "next/app";
import React from 'react';
import { FC } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.scss'
import Head from 'next/head';

const MyApp = ({ Component, pageProps }:AppProps) => (
  <Layout>
    <Head>
    </Head>
    <main>
      <Component {...pageProps} />
    </main>

  </Layout>


)


export default MyApp;