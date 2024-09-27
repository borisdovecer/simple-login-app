import pages from "../pages";
import { IPage } from "../pages/page.types.ts";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  const routes = pages.map((page: IPage) => {
    return <Route key={page.name} path={page.path} element={<page.element />} />;
  });

  return <Routes>{routes}</Routes>;
};

export default Router;