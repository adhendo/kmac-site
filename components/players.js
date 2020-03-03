import styles from "../styles/main.module.css";

const Players = () => {
	return (
		<div className={styles.players}>
			<div className={styles.players__container}>
				<a href="https://open.spotify.com/album/7t91YBAc0XdbCmTM4hzLj3?si=4PdHIZGFS4CLtuYSfQRjNg">
					<img
						className={styles.players__img}
						src="https://storage.cloud.google.com/kmac/ab67616d0000b2734cff217b5f0d7e89277377ff.jpeg"
						alt=""
					/>
				</a>
			</div>
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
	);
};

export default Players;
