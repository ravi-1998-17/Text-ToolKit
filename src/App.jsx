import About from "./components/About";
import Application from "./components/Application";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element: <><Navbar/><Application/></>
  },
  {
    path: '/about',
    element: <><Navbar/><About/></>
  },
  {
    path:'/contact',
    element: <><Navbar/><Contact/></>
  }
])

function App() {
  return (
    <div className="overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] dark:bg-slate-800"></div>
      </div>

      <div>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;



