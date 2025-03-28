import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import CustomCursorComponent from "./components/CustomCursorComponent";

const App = () => {
	return (
		<>
    <CustomCursorComponent/>
			<Navbar />
      <main>
        <HeroSection/>
        <ProjectSection/>
      </main>
      <Footer/>
		</>
	);
};

export default App;
