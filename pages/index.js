import Head from "next/head";
import styles from "../styles/main.module.css";
import Music from "./music";
import Video from "./video";
import Writing from "./writing";

const images = [
	"https://storage.cloud.google.com/kmac/e91e32b66f3620dc8c333c3a08a1e7e816822096.jpeg"
];

const Home = () => (
	<div className={styles.container}>
		<Head>
			<title>Kevin Maclachlan</title>
			<link rel="icon" href="../public/favicon.png" />
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

		<main className={styles.mobile}>
			<div className={styles.grid}>
				<div className={styles.leftGrid}>
					<div className={styles.linkPack}>
						<a
							className={styles.link__link}
							href="https://open.spotify.com/artist/6DBVQTg76VqM6CQKJGTRTc?si=Zdj4dZPeQbCvFXWcxgy4WA">
							SPOTIFY
						</a>
						<a
							className={styles.link__link}
							href="https://music.apple.com/us/artist/kevin-maclachlan/1348624747">
							APPLE
						</a>
						<a
							className={styles.link__link}
							href="https://kevinmaclachlan.bandcamp.com/">
							BANDCAMP
						</a>
						<a
							className={styles.link__link}
							href="https://instagram.com/the_kev_inn">
							INSTAGRAM
						</a>
						<a
							className={styles.link__link}
							href="https://www.youtube.com/watch?v=vDKWJaC1lNs&list=UU32tkebOBFThH1Rpl4fLzjQ">
							YOUTUBE
						</a>
					</div>
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

					<div className={styles.players}>
						<div className={styles.players__container}>
							<a href="https://open.spotify.com/album/2vJIemK2sBdmyhfedk02gQ?si=rpjFLyxoTAKY-kOsTF7P1A">
								<img
									className={styles.players__img}
									src="https://storage.cloud.google.com/kmac/ab67616d0000b27321be2ba615030c8aceb25adc.jpeg"
									alt=""
								/>
							</a>
						</div>
						<div className={styles.players__container}>
							<a href="https://open.spotify.com/album/6jlpi6TjBaMSE5AOdqtrtq?si=T8YTaqtbTcCoKed12cx_dw">
								<img
									className={styles.players__img}
									src="https://storage.cloud.google.com/kmac/ab67616d0000b273a178ebd3d85ff99ca80eb961.jpeg"
									alt=""
								/>
							</a>
						</div>
						<div className={styles.players__container}>
							<a href="https://open.spotify.com/album/5JgNi2fIbSfnEAGYbcOvAI?si=83usvgbWTSaWhqZz7Re-NA">
								<img
									className={styles.players__img}
									src="https://storage.cloud.google.com/kmac/ab67616d0000b2733ce6d552cf619c7dd0f203ed.jpeg"
									alt=""
								/>
							</a>
						</div>
						<div className={styles.players__container}>
							<a href="https://open.spotify.com/album/03u11vgHAULpyXWOTgeoTD?si=ESmwscIjTl2TcZs7NrCCcw">
								<img
									className={styles.players__img}
									src="https://storage.cloud.google.com/kmac/ab67616d0000b2738347c1c58120181beac9c7b2.jpeg"
									alt=""
								/>
							</a>
						</div>
					</div>
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
