import React from "react";
import InstagramEmbed from "react-instagram-embed";
import styles from "../styles/main.module.css";
//Puppeteer grab some stuff??-->>
const links = [
	"https://instagr.am/p/B9PcutGF07k/",
	"https://instagr.am/p/B9M_mzDF2wb/",
	"https://instagr.am/p/B9Ffv9nlRPo/",
	"https://instagr.am/p/B9CpyB4BuZL/",
	"https://instagr.am/p/B9AHyGBFRnI/",
	"https://instagr.am/p/B81zIptFVAi/",
	"https://instagr.am/p/B8zWqXyl1r_/",
	"https://instagr.am/p/B8wqkrDlMqI/",
	"https://instagr.am/p/B8riEnUlvE9/",
	"https://instagr.am/p/B8jxMgHFcMU/",
	"https://instagr.am/p/B8epjOrlG-2/"
];

const InstaPane = () => {
	return (
		<div className={styles.instapane}>
			{links.map(link => (
				<InstagramEmbed
					url={link}
					maxWidth={320}
					hideCaption={false}
					containerTagName="div"
					protocol=""
					injectScript
					onLoading={() => {}}
					onSuccess={() => {}}
					onAfterRender={() => {}}
					onFailure={() => {}}
				/>
			))}
		</div>
	);
};

export default InstaPane;
