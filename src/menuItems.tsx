import { ReactElement } from "react";

import MathIcon from "@mui/icons-material/FunctionsTwoTone";
import SumsIcon from "@mui/icons-material/Calculate";
import RegisterIcon from "@mui/icons-material/VpnKey";
import LoginIcon from "@mui/icons-material/Login";
import AdminPanelIcon from "@mui/icons-material/AdminPanelSettings";
import HlsIcon from "@mui/icons-material/Hls";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

import { EnglishRoutes, GermanRoutes, MathRoutes, RouteName } from "./routes";

export type MenuItem = {
  name: string;
  icon: ReactElement;
  link?: string;
  items?: MenuItem[];
};

export const loggedInMenuItems: MenuItem[] = [
  {
    name: "Математика",
    icon: <MathIcon />,
    link: RouteName.MATH,
    items: [
      {
        name: "Примеры",
        icon: <SumsIcon />,
        link: MathRoutes.SUMS,
      },
    ],
  },
  // {
  //   id: Math.random().toString(36).substring(2, 7).toString(),
  //   name: "Українська мова",
  //   icon: <UkrainianIcon />,
  //   link: RouteName.UKRAINIAN,
  //   items: [
  //     {
  //       id: Math.random().toString(36).substring(2, 7).toString(),
  //       name: "Учебники",
  //       icon: <BookIcon />,
  //       link: BookRoutes.UKRAINIAN,
  //     },
  //   ],
  // },
  // {
  //   id: Math.random().toString(36).substring(2, 7).toString(),
  //   name: "Російська мова",
  //   icon: <RussianIcon />,
  //   link: RouteName.RUSSIAN,
  //   items: [
  //     {
  //       id: Math.random().toString(36).substring(2, 7).toString(),
  //       name: "Учебники",
  //       icon: <BookIcon />,
  //       link: BookRoutes.RUSSIAN,
  //     },
  //   ],
  // },
  // {
  //   id: Math.random().toString(36).substring(2, 7).toString(),
  //   name: "Малювання",
  //   icon: <ArtIcon />,
  //   link: RouteName.ART,
  //   items: [
  //     {
  //       id: Math.random().toString(36).substring(2, 7).toString(),
  //       name: "Учебники",
  //       icon: <BookIcon />,
  //       link: BookRoutes.ART,
  //     },
  //   ],
  // },
  {
    name: "Англійська мова",
    icon: <HlsIcon />,
    link: RouteName.ENGLISH,
    items: [
      {
        name: "Словничок",
        icon: <ContentPasteIcon />,
        link: EnglishRoutes.DICTIONARY,
      },
    ],
  },
  {
    name: "Німецька мова",
    icon: <HlsIcon />,
    link: RouteName.GERMAN,
    items: [
      {
        name: "Словничок",
        icon: <ContentPasteIcon />,
        link: GermanRoutes.DICTIONARY,
      },
    ],
  },
  // {
  //   id: Math.random().toString(36).substring(2, 7),
  //   name: "Всі книги",
  //   icon: <LibraryBooksIcon />,
  //   link: RouteName.SCHOOL_BOOKS,
  //   items: [
  //     {
  //       id: Math.random().toString(36).substring(2, 7).toString(),
  //       name: "2 клас",
  //       icon: <Filter2Icon />,
  //       link: FormRoutes.SECOND,
  //     },
  //     {
  //       id: Math.random().toString(36).substring(2, 7).toString(),
  //       name: "4 клас",
  //       icon: <Looks4Icon />,
  //       link: FormRoutes.FOURTH,
  //     },
  //     {
  //       id: Math.random().toString(36).substring(2, 7).toString(),
  //       name: "3 клас",
  //       icon: <Looks4Icon />,
  //       link: FormRoutes.FOURTH,
  //     },
  //     {
  //       id: Math.random().toString(36).substring(2, 7).toString(),
  //       name: "5 клас",
  //       icon: <Looks4Icon />,
  //       link: FormRoutes.FOURTH,
  //     },
  //   ],
  // },
];

export const unLoggedUserMenuList: MenuItem[] = [
  {
    name: "Увійти",
    icon: <LoginIcon />,
    link: RouteName.LOGIN,
    // items: [{ id: Math.random().toString(36).substring(2, 7).toString(), name: 'Учебники', icon: <BookIcon />, link: BookRoutes.RUSSIAN }],
  },
  {
    name: "Зареєструватися",
    icon: <RegisterIcon />,
    link: RouteName.REGISTER,
    // items: [{ id: Math.random().toString(36).substring(2, 7).toString(), name: 'Учебники', icon: <BookIcon />, link: BookRoutes.RUSSIAN }],
  },
];

export const adminAdditionalMenuItems: MenuItem[] = [
  {
    name: "Адміністративна панель",
    icon: <AdminPanelIcon />,
    link: RouteName.ADMIN_PANEL,
    // items: [{ id: Math.random().toString(36).substring(2, 7).toString(), name: 'Учебники', icon: <BookIcon />, link: BookRoutes.RUSSIAN }],
  },
];
