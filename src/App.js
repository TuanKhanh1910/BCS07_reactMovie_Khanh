import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookTickets from "./Pages/BookTickets";
import BuyTicket from "./Pages/BuyTicket";
import Layout from "./Pages/Layout";
import LayoutTemplets from "./Pages/LayoutTemplets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutTemplets />}>
          <Route index path="" element={<Layout />} />
          <Route path="/bookticket" element={<BookTickets />} />
          <Route path="/buyticket" element={<BuyTicket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
