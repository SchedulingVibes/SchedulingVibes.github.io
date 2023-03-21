import React from "react";
import { Route, Routes } from "react-router-dom";

import TodoList from "./Pages/TodoList";
import Navigation from "./components/Header/Navbar";

import "bootstrap/dist/css/bootstrap.css";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles["App"]}>
      <Navigation />
      <Routes>
        <Route
          exact
          path='/todolist'
          element={<TodoList />}
        />
      </Routes>
    </div>
  );
}

export default App;

