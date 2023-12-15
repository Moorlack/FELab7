import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Task1 from "./components/firsttask/Task1";
import GoodsGallery from "./components/secondtask/GoodsGallery";

function App() {
    return (
        <Router>
            <div>
                <div className="navigate">
                    <Link to="/task1" className="navig">Task 1</Link>
                    <Link to="/task2" className="navig">Task 2</Link>
                </div>


                <Routes>
                    <Route path="/task1" element={<Task1 />} />
                    <Route path="/task2" element={<GoodsGallery />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
