import "./App.css";
import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { Register } from "./components/register/Register";
import { useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import { checkForUser } from "./services/userServices";
import { LogOut } from "./components/header/LogOut";
import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";
import { Catalog } from "./components/catalog/Catalog";
import { CreateBook } from "./components/createBook.js/CreateBook";
import { DetailsPage } from "./components/details/DetailsPage";
import { Edit } from "./components/edit/Edit";
import { Profile } from "./components/profile/Profile";
import { RouteGuard } from "./components/common/RouteGuard";
function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const value = checkForUser();
    setCurrentUser(value);
  }, []);

  function setCurrentUser(value) {
    setUser(value);
  }

  return (
    <UserContext.Provider value={{ user, setCurrentUser }}>
      <div className="wrapper">
        <Routes>
          <Route
            path="/register"
            element={<Register setCurrentUser={setCurrentUser} />}
          />
          <Route
            path="/login"
            element={<Login setCurrentUser={setCurrentUser} />}
          />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:bookId" element={<DetailsPage />} />

          <Route element={<RouteGuard/>}>
          <Route path="/create" element={<CreateBook />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit/:bookId" element={<Edit />} />
          </Route>
        </Routes>
        <Header />
        <div className="main"></div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
