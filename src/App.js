import React from "react";
import "./App.css";
import RoutesComponents from "./RoutesComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Translations/i18n";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <div>
        <RoutesComponents />
      </div>
    </>
  );
}

export default App;
