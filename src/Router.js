import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from "./components/Default.js";
import List from "./components/List.js";
import Update from "./components/Update.js";
import Detail from "./components/Detail.js";
import Delete from "./components/Delete.js";
import Create from "./components/Create.js";
import Manager from "./components/Manager.js";
import WaterMeasurePage from "./components/WaterMeasurePage.jsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='' element={<Default />} />
                <Route path='/list' element={<List />} />
                <Route path='/update' element={<Update />} />
                <Route path='/detail' element={<Detail />} />
                <Route path='/delete' element={<Delete />} />
                <Route path='/create' element={<Create />} />
                <Route path='/manage' element={<Manager />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/WaterMeasurePage' element={<WaterMeasurePage />} />

            </Routes>
        </BrowserRouter>
    );
}