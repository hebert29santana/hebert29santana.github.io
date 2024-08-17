import { ComponentType, Fragment, lazy, Suspense } from "react";
import { Routes as BrowserRoutes, Route } from "react-router-dom";

const PRESERVED = import.meta.glob("/src/pages/(_app|404).tsx");
const ROUTES = import.meta.glob<
  boolean,
  string,
  { default: ComponentType<unknown> }
>("/src/pages/**/[a-z[]*.tsx");

const preserved = Object.keys(PRESERVED).reduce(
  (preserved, fileName) => {
    const key = fileName.replace(/\/src\/pages\/|\.tsx$/g, "");
    const file = PRESERVED[fileName];
    return { ...preserved, [key]: file };
  },
  {
    _app: () => Promise.resolve({ default: () => null }),
    404: () => Promise.resolve({ default: () => null }),
  }
);

const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, "")
    .replace(/\[\.{3}.+\]/, "*")
    .replace(/\[(.+)\]/, ":$1");

  return { path, component: lazy(ROUTES[route]) };
});

const NotFound = lazy(preserved?.["404"]) as React.ElementType;
const App = lazy(preserved?.["_app"]) as React.ElementType;

export const Router = () => (
  <App>
    <Suspense fallback={"Loading..."}>
      <BrowserRoutes>
        {routes.map(({ path, component: Component = Fragment }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </BrowserRoutes>
    </Suspense>
  </App>
);
