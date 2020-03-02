import React, {useEffect, useState} from "react";
import PDFs from "../components/pdfs";
import styles from "../styles/main.module.css";

export default function Writing() {
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
				WRITING
			</div>
			<div
				style={{
					zIndex: "300",
					position: "absolute",
					left: "0"
				}}>
				{mapStatus ? (
					<>
						<div
							onClick={() => {
								setMapStatus(null);
							}}>
							<PDFs />
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
