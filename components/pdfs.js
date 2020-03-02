import React from "react";
import styles from "../styles/main.module.css";

const PDFs = () => (
	<div className={styles.writing__container}>
		<iframe
			src="https://storage.cloud.google.com/kmac/Another%20Experience%20Experiencing%20Another%20Sort%20Story.pdf"
			style={{
				width: "28rem",
				height: "35rem",
				borderWidth: "0",
				borderStyle: "none"
			}}></iframe>
		<iframe
			src="https://storage.cloud.google.com/kmac/Last%20Guys%20Finish%20Nice%20Short%20Story.pdf"
			style={{
				width: "28rem",
				height: "35rem",
				borderWidth: "0",
				borderStyle: "none"
			}}></iframe>
		<iframe
			src="https://storage.cloud.google.com/kmac/The%20Opposite%20Attracts%20the%20Opposite%20Short%20Story.pdf"
			style={{
				width: "28rem",
				height: "35rem",
				borderWidth: "0",
				borderStyle: "none"
			}}></iframe>
	</div>
);

export default PDFs;
