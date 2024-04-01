import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Development } from "./pages/Development";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={<Layout />}>*/}
            <Route index element={<Home />} />
            <Route path="/dev" element={<Development />} />
          {/*</Route>*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
