import React, { useEffect } from "react";
import Static from "../assets/images/page 5/static.png";
import Text from "../assets/images/page 5/text-1.png";
import gsap from "gsap";

export const Page5: React.FC = () => {
	
	useEffect(() => {
		const animations = () => {
			const tl = gsap.timeline();
			tl.fromTo(
				".page-5 p",
				{ x: "73vw", y: "28vh", duration: 10 },
				{ x: "78vw", y: "24vh", duration: 10 },
				0
			);
			tl.fromTo(".page-5 p", { opacity: 0 }, { opacity: 1, duration: 2 }, 0);
		};
		animations();
	}, []);

	return (
		<div
			className="page-5 static-background relative"
			style={{ backgroundImage: `url(${Static})` }}
		>
			<p
				className="bg-contain bg-center bg-no-repeat absolute"
				style={{ backgroundImage: `url(${Text})`, width: 30, height: 30 }}
			></p>
		</div>
	);
};
