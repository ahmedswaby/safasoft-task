import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '~/Pages/signUp/index'



/// //////////// APP COMPONENT ///////////////////////
function App() {
  return (
    <Suspense fallback={<h2>Loading</h2>}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
    <App />
);
