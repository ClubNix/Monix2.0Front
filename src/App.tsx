import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header/Header";
import Catalog from "./Pages/Catalog/Catalog";
import Documentation from "./Pages/Documentation/Documentation";
import Members from "./Pages/Members/Members";

function App() {
  const [activeTab, setActiveTab] = useState<string | null>("members");

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Nav variant="tabs" defaultActiveKey="members" onSelect={setActiveTab}>
          <Nav.Item>
            <Nav.Link eventKey="members">Membres</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="catalog">Catalogue</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="documentation">Documentation</Nav.Link>
          </Nav.Item>
        </Nav>

        <div>
          {activeTab === "members" ? <Members /> : null}
          {activeTab === "catalog" ? <Catalog /> : null}
          {activeTab === "documentation" ? <Documentation /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
