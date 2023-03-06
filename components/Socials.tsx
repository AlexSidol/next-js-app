import { FC } from "react";
import React from 'react';
import Head from "next/head";
import { socialType } from "../types";

import styles from "../styles/Socials.module.scss";

type socialTypeProps = {
  socials: socialType,
}

const Socials: FC <socialTypeProps> = ({ socials }) => {
  if (!socials) {
    return null;
  }

  return (
    <>
      <Head>
      </Head>
      <ul className={styles.socials}>
        {socials &&
          socials.map(({ id, icon, path }) => (
            <li key={id}>
              <a href={path} target="_blank" rel="noopener noreferrer">
                <i className={`fab fa-${icon}`} aria-hidden="true" />
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Socials;
