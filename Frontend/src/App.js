import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rajasthan from "./Rajasthan/Rajasthan.jsx";
import Home from "./Project/Home.jsx";
import Layout from "./Project/Layout.jsx";
import Gujrat from "./Gujrat/Gujrat.jsx";
import MadhyaPradesh from "./MadhyaPradesh/MadhyaPradesh.jsx";
import Maharashtra from "./Maharashtra/Maharashtra.jsx";
import Daman from "./Daman&Diu/Daman.jsx";
import Goa from "./Goa/Goa.jsx";
import Keral from "./Kerala/Keral.jsx";
import Karnataka from "./Karnataka/Karnataka.jsx";
import AndhraPradesh from "./AndhraPradesh/AndhraPradesh.jsx";
import Meghalaya from "./Meghalaya/Meghalaya.jsx";
import Up from "./Up/Up.jsx";
import Ladakh from "./North/LadakhSection/Ladakh.jsx";
import JammuAndKashmir from "./North/Jammu&Kashmir-Section/JammuAndKashmir.jsx";
import HimachalPradesh from "./North/Himachal Pradesh/HimachalPradesh.jsx";
import Uttarakhand from "./North/Uttarakhand/Uttarakhand.jsx";
import SikkimFile from "./East/Sikkim/SikkimFile.jsx";
import OdishaFile from "./East/Odisha/OdishaFile.jsx";
import AssamFile from "./East/Assam/AssamFile.jsx";
import WestBengalFile from "./East/WestBengal/WestBengalFile.jsx";
import TamilNaduFile from "./Tamil Nadu/TamilNaduFile.jsx";
import SignUpForm from "./Project/SignUpForm.js";
import LoginForm from "./Project/LoginForm.js";
import Itinerary from "./RouterComponent/Itinerary.js";
// import Bali from './RouterComponent/Bali.js'


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rajasthan",
        element: <Rajasthan />,
      },
      { 
        path: "/itinerary/:state",
        element: <Itinerary /> },
      {
        path: "/gujrat",
        element: <Gujrat />,
      },
      {
        path: "/mp",
        element: <MadhyaPradesh />,
      },
      {
        path: "/maharashtra",
        element: <Maharashtra />,
      },
      {
        path: "/daman",
        element: <Daman />,
      },
      {
        path: "/goa",
        element: <Goa />,
      },
      {
        path: "/keral",
        element: <Keral />,
      },
      {
        path: "/karnataka",
        element: <Karnataka />,
      },
      {
        path: "/andhra",
        element: <AndhraPradesh />,
      },
      {
        path: "/meghalaya",
        element: <Meghalaya />,
      },
      {
        path: "/up",
        element: <Up />,
      },
      {
        path: "/ladakh",
        element: <Ladakh />,
      },
      {
        path: "/JammuAndKashmir",
        element: <JammuAndKashmir />,
      },
      {
        path: "/Himachal_Pradesh",
        element: <HimachalPradesh />,
      },
      {
        path: "/Uttarakhand",
        element: <Uttarakhand />,
      },
      {
        path: "/Sikkim",
        element: <SikkimFile />,
      },
      {
        path: "/Odisha",
        element: <OdishaFile />,
      },
      {
        path: "/Assam",
        element: <AssamFile />,
      },
      {
        path: "/WestBengal",
        element: <WestBengalFile />,
      },
      {
        path: "/TamilNadu",
        element: <TamilNaduFile />,
      },
      {
        path: "/SignUpForm",
        element: <SignUpForm />,
      },
      {
        path: "/LoginForm",
        element: <LoginForm />,
      },
      // {
      // },
    
    ],
  },
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
