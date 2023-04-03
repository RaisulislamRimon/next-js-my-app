import Head from "next/head";
import Link from "next/link";
import styles from "../styles/News.module.css";

export default function News() {
  return (
    <div>
      <Head>
        <title>News</title>
      </Head>

      <Link href="/">
        <button className="btn btn-warning">Back to Home</button>
      </Link>

      <div className={styles.box}>
        <h1>News page</h1>
      </div>
    </div>
  );
}
