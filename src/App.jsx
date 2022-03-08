import './style/App.css';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./component/Pages/Home/Home"
import SimpleFlex from './component/Pages/SimpleFlex/SimpleFlex'
function App() {
    return (
        <>
            <Routes>
                <Route  path="/" element={<Home/>}/>    
                <Route  path="/simpleflex" element={<SimpleFlex/>}/>    
            </Routes>
        </>
    );
}

export default App;
