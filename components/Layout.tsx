import Head from "next/head";
import { Navbar } from "@/components/Navbar";

export function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Oswald:wght@300;500;700&display=swap"
      rel="stylesheet"
    />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,900&family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <header>
        <Navbar/>
      </header>
      {children}
      <footer>
        <div>I am the footer</div>
      </footer>
    </>
  );
}
