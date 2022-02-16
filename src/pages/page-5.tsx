import React, { useEffect } from "react";
import Static from "../assets/images/page 5/static.png";
import Text from "../assets/images/page 5/text-1.png";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { PageNavigator } from "../components/page-navigator";
import { PagesMenu } from "../components/pages-menu";

export const Page5: React.FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const animations = () => {
			const tl = gsap.timeline();
			tl.fromTo(
				".page-5 p",
				{ x: "1400px", y: "300px", duration: 2 },
				{ x: "1500px", y: "250px", duration: 2 },
				0
			);
			tl.fromTo(".page-5 p", { opacity: 0 }, { opacity: 1, duration: 3 }, 0);
		};
		animations();
		document.title = 'PI - Página 5';

	}, []);

	return (
		<>
		<PagesMenu/>
			<div
				className="page-5 static-background relative"
				style={{ backgroundImage: `url(${Static})` }}
			>
				<p
					className="bg-contain bg-center bg-no-repeat absolute"
					style={{ backgroundImage: `url(${Text})`, width: "90px", height:  "100px" }}
				></p>
			</div>
			<PageNavigator
				leftClick={() => navigate("/pi/page/4")}
				rightClick={() => navigate("/pi/page/6")}
			/>
		</>
	);
};
