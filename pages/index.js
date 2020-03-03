import Head from "next/head";
import Nav from "../components/nav";
import PlatformNav from "../components/platformNav";
import Players from "../components/players";
import styles from "../styles/main.module.css";

const images = [
	"https://storage.cloud.google.com/kmac/e91e32b66f3620dc8c333c3a08a1e7e816822096.jpeg"
];

const Home = () => (
	<div className={styles.container}>
		<Head>
			<title>Kevin Maclachlan</title>
			<link rel="icon" type="image/png" href="/apple-icon.png" />
			<style>
				@import
				url('https://fonts.googleapis.com/css?family=Raleway|Spartan&display=swap');
			</style>
		</Head>

		<Nav />

		<main className={styles.mobile}>
			<div className={styles.grid}>
				<div className={styles.leftGrid}>
					<PlatformNav />
					<div className={styles.weirdSpacer}>
						<div></div>
					</div>
				</div>
				<div className={styles.home}>
					{images.map(img => (
						<div
							className={styles.rightpane}
							style={{
								backgroundImage: `url(
								${img}
							)`
							}}></div>
					))}

					<Players />
				</div>
			</div>
		</main>

		<style jsx global>{`
			html,
			body {
				padding: 0;
				margin: 0;
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
					Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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

export default Home;
