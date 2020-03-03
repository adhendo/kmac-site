import Music from "../pages/music";
import Video from "../pages/video";
import Writing from "../pages/writing";
import styles from "../styles/main.module.css";

const Nav = () => {
	return (
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
	);
};

export default Nav;
