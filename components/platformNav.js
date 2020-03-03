import styles from "../styles/main.module.css";

const PlatformNav = () => {
	return (
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
			<a className={styles.link__link} href="https://instagram.com/the_kev_inn">
				INSTAGRAM
			</a>
			<a
				className={styles.link__link}
				href="https://www.youtube.com/watch?v=vDKWJaC1lNs&list=UU32tkebOBFThH1Rpl4fLzjQ">
				YOUTUBE
			</a>
		</div>
	);
};

export default PlatformNav;
