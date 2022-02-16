import React, { useEffect } from "react";
import Static from "../assets/images/page 4/static.png";
import Cloud1 from "../assets/images/page 4/cloud-1.png";
import Cloud2 from "../assets/images/page 4/cloud-2.png";
import Cloud3 from "../assets/images/page 4/cloud-3.png";
import gsap from "gsap";

export const Page4: React.FC = () => {
    
	useEffect(() => {
		const animations = () => {
			const tl = gsap.timeline();
			tl.fromTo(
				".clouds-group .cloud",
				{ rotate: "10deg", duration: 2 },
				{ rotate: "0deg", yoyo: true, repeat: -1, duration: 2 },
				0
			);
			tl.fromTo(
				".clouds-group",
				{ x: "80vw", duration: 20 },
				{ x: "-125%", repeat: -1, duration: 20 },
				0
			);
		};
		animations();
	}, []);

	return (
		<div className="static-background relative" style={{ backgroundImage: `url(${Static})` }}>
			<div
				className="cloud absolute"
				style={{
					top: "35vh",
					left: "10vw",
					width: "70px",
					height: "70px",
					backgroundImage: `url(${Cloud3})`,
				}}
			></div>

			<div className="clouds-group absolute" style={{ top: "15vh", left: "10vw" }}>
				<div
					className="cloud"
					style={{
						width: "100px",
						height: "100px",
						backgroundImage: `url(${Cloud2})`,
					}}
				></div>
				<div
					className="cloud"
					style={{
						width: "100px",
						height: "100px",
						backgroundImage: `url(${Cloud1})`,
					}}
				></div>
				<div
					className="cloud"
					style={{
						width: "100px",
						height: "100px",
						backgroundImage: `url(${Cloud3})`,
					}}
				></div>
			</div>
		</div>
	);
};
