import React, { useState } from "react";
import MenuContainer from "../assets/images/ui/menu-container.png";
import MenuLogo from "../assets/images/ui/menu-logo.png";
import MenuButton from "../assets/images/ui/menu-button.png";
import CloseButton from "../assets/images/ui/big-close-button.png";
import Left from "../assets/images/ui/button-left.png";
import Right from "../assets/images/ui/button-right.png";

import Page4 from "../assets/images/page 4/static.png";
import Page5 from "../assets/images/page 5/static.png";
import Page6 from "../assets/images/page 6/static.png";
import { useNavigate } from "react-router-dom";

export const PagesMenu: React.FC = () => {
	const [visible, setVisible] = useState(true);
    const navigate = useNavigate();
	return (
		<div
			className={`pages-menu ${visible && "visible"}`}
			style={{ backgroundImage: `url(${MenuContainer})` }}
		>
			<div className="container">
				<button
					className="button menu-button p-0 m-2"
					style={{ width: 30, height: 30 }}
					onClick={() => setVisible(!visible)}
				>
					<img
						src={visible == false ? MenuButton : CloseButton}
						alt="menu-button"
						className="shape"
					/>
				</button>
				<img src={MenuLogo} alt="menu-logo" className="logo" />

				<button className="button p-0 m-2" style={{ width: 20, height: 20 }}>
					<img src={Left} alt="left-button" className="shape" />
				</button>
				<div className="pages-container">
                    <img src={Page4} alt="page-4" className="page" onClick={()=>navigate('/pi/page/4')} />
                    <img src={Page5} alt="page-5" className="page" onClick={()=>navigate('/pi/page/5')}/>
                    <img src={Page6} alt="page-6" className="page" onClick={()=>navigate('/pi/page/6')}/>
                </div>
				<button className="button p-0 m-2" style={{ width: 20, height: 20 }}>
					<img src={Right} alt="right-button" className="shape" />
				</button>
			</div>
		</div>
	);
};
