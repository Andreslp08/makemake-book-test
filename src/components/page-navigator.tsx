import React from "react";
import Left from "../assets/images/ui/big-button-left.png";
import Right from "../assets/images/ui/big-button-right.png";

interface PageNavigatorProps {
	leftClick?(): void;
	rightClick?(): void;
}

export const PageNavigator: React.FC<PageNavigatorProps> = ({ leftClick, rightClick }) => {
	return (
		<div className="fixed w-full left-0 bottom-0 flex items-center justify-between">
			<button
				className="button p-0 m-2"
				style={{ width: 28, height: 28 }}
				onClick={() => leftClick && leftClick()}
			>
				<img src={Left} alt="left-button" className="shape" />
			</button>
			<button
				className="button p-0 m-2"
				style={{ width: 28, height: 28 }}
				onClick={() => rightClick && rightClick()}
			>
				<img src={Right} alt="right-button" className="shape" />
			</button>
		</div>
	);
};
