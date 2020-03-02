import React, {useEffect, useState} from "react";
import styles from "../styles/main.module.css";

const vids = [
	"https://www.youtube.com/embed/vDKWJaC1lNs&t=8s",
	"https://www.youtube.com/embed/Maob77XVUqc",
	"https://www.youtube.com/embed/aizMgmcodJ8",
	"https://www.youtube.com/embed/9-mgZ66JLMY"
];

export default function Video() {
	const [mapStatus, setMapStatus] = useState(null);

	useEffect(() => {
		const listener = e => {
			if (e.key === "Escape") {
				setMapStatus(null);
			}
		};
		window.addEventListener("keydown", listener);

		return () => {
			window.removeEventListener("keydown", listener);
		};
	}, []);
	return (
		<>
			<div
				onClick={e => {
					e.preventDefault();
					setMapStatus(e);
				}}>
				VIDEO
			</div>
			<div
				style={{
					zIndex: "200",
					position: "absolute",
					left: "0"
				}}>
				{mapStatus ? (
					<>
						<div
							className={styles.video__container}
							onClick={() => {
								setMapStatus(null);
							}}>
							<div className={styles.vidGrid}>
								{vids.map(vid => (
									<iframe
										allow="autoplay *; encrypted-media *;"
										frameborder="0"
										height="350"
										className={styles.vidFrame}
										sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
										src={vid}></iframe>
								))}
							</div>

							<div
								className={styles.closeBtn}
								onClick={() => {
									setMapStatus(null);
								}}>
								X
							</div>
						</div>
					</>
				) : null}
			</div>
		</>
	);
}
