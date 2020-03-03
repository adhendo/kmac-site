import React, {useEffect, useState} from "react";
import styles from "../styles/main.module.css";

export default function Music() {
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
				MUSIC
			</div>
			<div
				style={{
					zIndex: "100",
					position: "absolute"
				}}>
				{mapStatus ? (
					<>
						<div className={styles.playlist__container}>
							<div>
								<div
									style={{width: "100%", justifyContent: "center"}}
									onClick={() => {
										setMapStatus(null);
									}}>
									<iframe
										allow="autoplay *; encrypted-media *;"
										frameborder="0"
										height="450"
										className={styles.playlist__frame}
										sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
										src="https://embed.music.apple.com/us/album/pretty-ugly/1496765704"></iframe>
										
								</div>
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
