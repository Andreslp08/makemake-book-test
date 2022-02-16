import React, { useEffect } from "react";
import Static from "../assets/images/page 4/static.png";
import Cloud1 from "../assets/images/page 4/cloud-1.png";
import Cloud2 from "../assets/images/page 4/cloud-2.png";
import Cloud3 from "../assets/images/page 4/cloud-3.png";
import gsap from "gsap";
import { PageNavigator } from "../components/page-navigator";
import { useNavigate } from "react-router-dom";
import { PagesMenu } from "../components/pages-menu";

export const Page4: React.FC = () => {
	const navigate = useNavigate();

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
				{ x: "200%", duration: 20 },
				{ x: "-125%", repeat: -1, duration: 20 },
				0
			);
		};
		animations();
		document.title = 'PI - Página 4';
	}, []);

	return (
		<>
			<PagesMenu />
			<div
				className="static-background relative"
				style={{ backgroundImage: `url(${Static})` }}
			>
				<div
					className="cloud absolute"
					style={{
						top: "35%",
						left: "10%",
						width: "200px",
						height: "200px",
						backgroundImage: `url(${Cloud3})`,
					}}
				></div>

				<div className="clouds-group absolute" style={{ top: "15%", left: "10%" }}>
					<div
						className="cloud"
						style={{
							width: "250px",
							height: "250px",
							backgroundImage: `url(${Cloud2})`,
						}}
					></div>
					<div
						className="cloud"
						style={{
							width: "250px",
							height: "250px",
							backgroundImage: `url(${Cloud1})`,
						}}
					></div>
					<div
						className="cloud"
						style={{
							width: "250px",
							height: "250px",
							backgroundImage: `url(${Cloud3})`,
						}}
					></div>
				</div>
			</div>
			<PageNavigator
				leftClick={() => navigate("/pi/home")}
				rightClick={() => navigate("/pi/page/5")}
			/>
		</>
	);
};
