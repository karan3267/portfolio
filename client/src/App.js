import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading } from "./redux/rootSlice";
import Loader from "./components/Loader";
function App() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/api/portfolio/get/portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(HideLoading());
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
      dispatch(HideLoading());
    }
  };
  useEffect(() => {
    if(!portfolioData){
      getPortfolioData();
    }
  },[]);
  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
