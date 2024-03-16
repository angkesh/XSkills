import {React, useState, useEffect} from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import { handleThemeChange } from "./constants/handleThemeChange";
import ThemeBar from "./components/themeBar/ThemeBar";
import Footer from "./components/footer/Footer";
import Courses from "./components/courses/Courses";

function App() {
  
  const [showMenu, setShowMenu] = useState(false)
  const [hasBackKey, setHasBackKey] = useState(false)

  function handleShowMenu(show){
    setShowMenu(show);
  }

  function handleCourseActive(intro){
    
  }

  return (
    <> 
      <div id="main" className="overflow-x-hidden"> 
        <Navbar 
            handleShowMenu={handleShowMenu}
        />
        <div className="w-full h-auto text-lightText px-4 py-10 overflow-x-hidden">
          <div className="max-w-screen-xl mx-auto">
            <Banner />
            <Courses 
              handleActive = {handleCourseActive}
              backKey={setHasBackKey}
            />

            <Footer />
            <ThemeBar/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

