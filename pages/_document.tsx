import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';

export default function Document() {
  return (
    <Html lang="en">
       <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css"
        />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
