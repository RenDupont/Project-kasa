import {Routes, Route} from "react-router-dom";
import Home from './home/Home';
import APropos from './a-propos/APropos';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="APropos" element={<APropos />} />
        </Routes>
    );
}

export default App;