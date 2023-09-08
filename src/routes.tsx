import React from "react";
import { Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Math = React.lazy(() => import("./pages/Math/Math"));
const MathSums = React.lazy(() => import("./pages/Math/sums/Sums"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Register = React.lazy(() => import("./pages/Register/Register"));
const AdminPanel = React.lazy(() => import("./pages/AdminPanel/AdminPanel"));

const English = React.lazy(() => import("./pages/English/English"));
const EnglishDictionary = React.lazy(
  () => import("./pages/English/dictionary/Dictionary")
);

const German = React.lazy(() => import("./pages/German/German"));
const GermanDictionary = React.lazy(
  () => import("./pages/German/dictionary/Dictionary")
);

export enum RouteName {
  HOME = "/",
  MATH = "/math",
  UKRAINIAN = "/ukrainian",
  RUSSIAN = "/russian",
  ART = "/art",
  ENGLISH = "/english",
  GERMAN = "/german",
  LOGIN = "/login",
  REGISTER = "/register",
  ADMIN_PANEL = "/admin_panel",
  SCHOOL_BOOKS = "/schoolbooks",
}

export const BookRoutes = {
  MATH: RouteName.MATH + "/books",
  UKRAINIAN: RouteName.UKRAINIAN + "/books",
  RUSSIAN: RouteName.RUSSIAN + "/books",
  ART: RouteName.ART + "/books",
};

export const MathRoutes = {
  BOOKS: RouteName.MATH + "/books",
  SUMS: RouteName.MATH + "/sums",
};

export const FormRoutes = {
  SECOND: RouteName.SCHOOL_BOOKS + "/2-form",
  FOURTH: RouteName.SCHOOL_BOOKS + "/4-form",
  THIRD: RouteName.SCHOOL_BOOKS + "/3-form",
  FIFTH: RouteName.SCHOOL_BOOKS + "/5-form",
};

export const EnglishRoutes = {
  DICTIONARY: RouteName.ENGLISH + "/dictionary",
};

export const GermanRoutes = {
  DICTIONARY: RouteName.GERMAN + "/dictionary",
};

export const defaultRoutes: React.ReactNode[] = [
  <Route key={RouteName.HOME} path={RouteName.HOME} element={<Home />} />,
  <Route key={RouteName.LOGIN} path={RouteName.LOGIN} element={<Login />} />,
  <Route
    key={RouteName.REGISTER}
    path={RouteName.REGISTER}
    element={<Register />}
  />,
];

export const authRoutes: React.ReactNode[] = [
  <Route key={RouteName.HOME} path={RouteName.HOME} element={<Home />} />,

  <Route key={RouteName.MATH} path={RouteName.MATH} element={<Math />}>
    <Route path={"sums"} element={<MathSums />} />
  </Route>,

  <Route key={RouteName.ENGLISH} path={RouteName.ENGLISH} element={<English />}>
    <Route path={"dictionary"} element={<EnglishDictionary />} />
  </Route>,

  <Route key={RouteName.GERMAN} path={RouteName.GERMAN} element={<German />}>
    <Route path={"dictionary"} element={<GermanDictionary />} />
  </Route>,
];

export const adminRoutes: React.ReactNode[] = [
  // [...authRoutes],
  <Route
    key={RouteName.ADMIN_PANEL}
    path={RouteName.ADMIN_PANEL}
    element={<AdminPanel />}
  />,
];

// export interface IRoute {
//   path: string
//   element: React.ReactNode
//   children?: IRoute[]
// }

// export const defaultRoutes: IRoute[] = [
//   {
//     path: RouteNames.LOGIN,
//     element: <Login />,
//   },
//   {
//     path: RouteNames.LOGIN,
//     element: <Register />,
//   },
// ]

// export const authRoutes: IRoute[] = [
//   {
//     path: RouteNames.HOME,
//     element: <Home />,
//   },
//   {
//     path: RouteNames.MATH,
//     element: <Math />,
//     children: [
//       {
//         path: 'books',
//         element: <MathBooks />,
//       },
//       {
//         path: 'sums',
//         element: <MathSums />,
//       },
//     ],
//   },
//   {
//     path: RouteNames.UKRAINIAN,
//     element: <Ukrainian />,
//   },
//   {
//     path: RouteNames.RUSSIAN,
//     element: <Russian />,
//   },
//   {
//     path: RouteNames.ART,
//     element: <Art />,
//   },
// ]
