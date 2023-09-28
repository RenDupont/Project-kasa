import {Routes, Route} from "react-router-dom";
import Home from './home/Home';
import APropos from './a-propos/APropos';
import Logement from "./logement/Logement";
import Error404 from "./error/Error404";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/APropos" element={<APropos />} />
            <Route path="/Logement/:id" element={<Logement />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default App;