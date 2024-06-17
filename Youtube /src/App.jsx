import React ,{useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const App = () => {
  const [ closeSideBar , setCloseSideBar ] = useState(false) ;
  const [vedioCategory, setVedioCategory] = useState(0);
  return (
    <>
      <Navbar closeSideBar={closeSideBar} setCloseSideBar={setCloseSideBar} setVedioCategory={setVedioCategory} />
      <main>
        <Outlet context={[closeSideBar,vedioCategory, setVedioCategory]}  ></Outlet>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
