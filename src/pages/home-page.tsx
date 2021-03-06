import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container1 from '../assets/images/ui/container-1.png'
import Container2 from '../assets/images/ui/container-2.png'
import Container3 from '../assets/images/ui/container-3.png'

export const HomePage: React.FC = () => {

    const navigate = useNavigate();

    useEffect(()=>{
     document.title = 'PI - Home';
    },[])

	return (
		<section className="home-page">
			<div className="flex flex-row my-4 w-full justify-around items-center">
				<button className="button" style={{fontSize:'60px'}} onClick={()=>navigate('/pi/page/4')}>
                    <img src={Container1} alt="container-1-shape" className="shape" />
                    Leer
                    </button>
				<button className="button" onClick={()=>alert('Aquí va algo...')} style={{fontSize:'40px'}}>
                    <img src={Container3} alt="container-1-shape" className="shape" />
                    <p className="mt-4 my-1 p-5">
                    Para quienes les gusta <br/> leer sin saber hacerlo
                    </p>
                    </button>
				<button className="button" onClick={()=>alert('Aquí se muestran los creditos.')} style={{fontSize:'60px'}}>
                    <img src={Container2} alt="container-1-shape" className="shape" />
                    Créditos
                    </button>
			</div>
		</section>
	);
};
