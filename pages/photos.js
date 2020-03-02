import Head from "next/head";
import React from "react";
import InstaPane from "../components/instapane";
import styles from "../styles/main.module.css";
import Music from "./music";
import Video from "./video";
import Writing from "./writing";

const Photos = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Kevin Maclachlan</title>
				<link rel="icon" href="/favicon.ico" />
				<style>
					@import
					url('https://fonts.googleapis.com/css?family=Raleway|Spartan&display=swap');
				</style>
			</Head>

			<nav>
				<a className={styles.nav_item} href="/">
					ALL
				</a>
				<div className={styles.nav_item}>
					<Music />
				</div>
				<div className={styles.nav_item}>
					<Video />
				</div>
				<div className={styles.nav_item}>
					<Writing />
				</div>
				<a className={styles.nav_item} href="/photos">
					PHOTOS
				</a>
			</nav>

			<main>
				<InstaPane />
			</main>
			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
				}
				nav {
					display: flex;
					margin: auto;
					width: 60%;
					justify-content: space-evenly;
				}
				ul {
					list-style: none;
				}

				main {
					flex: 1;
					display: flex;
					flex-direction: column;
					margin: 3rem 5rem 0 5rem;
					font-family: "Spartan";
					align-items: center;
					justify-content: center;
				}

				footer {
					width: 100%;
					height: 100px;
					border-top: 1px solid #eaeaea;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				footer img {
					margin-left: 0.5rem;
				}

				footer a {
					display: flex;
					justify-content: center;
					align-items: center;
				}

				a {
					color: inherit;
					text-decoration: none;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	);
};

export default Photos;
