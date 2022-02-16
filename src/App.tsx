import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { Page4 } from "./pages/page-4";
import { Page5 } from "./pages/page-5";
import { Page6 } from "./pages/page-6";
import "./styles/styles.scss";
function App() {

	return (
		<BrowserRouter>
			<main className="main">
				<Routes>
          <Route path="/pi/home" element={<HomePage/>}/>
          <Route path="/" element={<Navigate to={'/pi/home'}/>}/>
          <Route path="/pi/page/4" element={<Page4/>}/>
          <Route path="/pi/page/5" element={<Page5/>}/>
          <Route path="/pi/page/6" element={<Page6/>}/>
        </Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
