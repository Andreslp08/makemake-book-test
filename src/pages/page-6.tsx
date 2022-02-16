import React, { useEffect } from "react";
import Static from "../assets/images/page 6/static.png";
import Text from "../assets/images/page 6/text-1.png";
import Eggs from "../assets/images/page 6/eggs.png";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { PageNavigator } from "../components/page-navigator";
import { PagesMenu } from "../components/pages-menu";

export const Page6: React.FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const animations = () => {
			const tl = gsap.timeline();
			tl.fromTo(
				".page-6 p",
				{ x: "450%", y: "150%", duration: 2 },
				{ x: "450%", y: "100%", duration: 2 },
				0
			);
			tl.fromTo(
				".page-6 div",
				{ x: "30%", y: "30%", duration: 2 },
				{ x: "25%", y: "25%", duration: 2 },
				0
			);
			tl.fromTo(".page-6 *", { opacity: 0 }, { opacity: 1, duration: 2 }, 0);
			tl.fromTo(
				".page-6 *",
				{ rotate: "10deg", duration: 2 },
				{ rotate: "0deg", duration: 2, yoyo: true, repeat: -1 }
			);
		};
		animations();
		document.title = 'PI - Página 6';
	}, []);

	return (
		<>
			<PagesMenu />
			<div
				className="page-6 static-background relative"
				style={{ backgroundImage: `url(${Static})` }}
			>
				<p
					className="bg-contain bg-center bg-no-repeat absolute"
					style={{ backgroundImage: `url(${Text})`, width: '200px', height: '200px' }}
				></p>

				<div
					className="bg-contain bg-center bg-no-repeat absolute"
					style={{ backgroundImage: `url(${Eggs})`, width: '500px', height: '500px' }}
				></div>
			</div>
			<PageNavigator
				leftClick={() => navigate("/pi/page/5")}
				rightClick={() => navigate("/pi/home")}
			/>
		</>
	);
};
