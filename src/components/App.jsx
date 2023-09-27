import {Routes, Route} from "react-router-dom";
import Home from './home/Home';
import APropos from './a-propos/APropos';
import Logement from "./logement/Logement";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/APropos" element={<APropos />} />
            <Route path="/Logement/:id" element={<Logement />} />
        </Routes>
    );
}

export default App;