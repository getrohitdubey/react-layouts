import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import AdminRoutes from "./routes/AdminRoutes";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <Switch>
        <MainRoutes exact path="/" component={Home} />
        <MainRoutes path="/category" component={Category} />
        <MainRoutes path="/products" component={Products} />
        <AdminRoutes path="/admin" component={Admin} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
