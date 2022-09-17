import MathIcon from "@mui/icons-material/FunctionsTwoTone";
import RussianIcon from "@mui/icons-material/TextDecreaseTwoTone";
import UkrainianIcon from "@mui/icons-material/AbcTwoTone";
import ArtIcon from "@mui/icons-material/PhotoAlbum";
import BookIcon from "@mui/icons-material/Book";
import SumsIcon from "@mui/icons-material/Calculate";
import RegisterIcon from "@mui/icons-material/VpnKey";
import LoginIcon from "@mui/icons-material/Login";
import AdminPanelIcon from "@mui/icons-material/AdminPanelSettings";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import HlsIcon from "@mui/icons-material/Hls";
import Filter2Icon from "@mui/icons-material/Filter2";
import Looks4Icon from "@mui/icons-material/Looks4";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

import {
  BookRoutes,
  EnglishRoutes,
  FormRoutes,
  MathRoutes,
  RouteName,
} from "./routes";

export type MenuItem = {
  id: string;
  name: string;
  icon: React.ReactElement;
  link: string;
  items?: MenuItem[];
};

export const subjects: MenuItem[] = [
  {
    id: Math.random().toString(36).substring(2, 7),
    name: "Математика",
    icon: <MathIcon />,
    link: RouteName.MATH,
    items: [
      {
        id: Math.random().toString(36).substring(2, 7),
        name: "Учебники",
        icon: <BookIcon />,
        link: BookRoutes.MATH,
      },
      {
        id: Math.random().toString(36).substring(2, 7),
        name: "Примеры",
        icon: <SumsIcon />,
        link: MathRoutes.SUMS,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 7).toString(),
    name: "Українська мова",
    icon: <UkrainianIcon />,
    link: RouteName.UKRAINIAN,
    items: [
      {
        id: Math.random().toString(36).substring(2, 7).toString(),
        name: "Учебники",
        icon: <BookIcon />,
        link: BookRoutes.UKRAINIAN,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 7).toString(),
    name: "Російська мова",
    icon: <RussianIcon />,
    link: RouteName.RUSSIAN,
    items: [
      {
        id: Math.random().toString(36).substring(2, 7).toString(),
        name: "Учебники",
        icon: <BookIcon />,
        link: BookRoutes.RUSSIAN,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 7).toString(),
    name: "Малювання",
    icon: <ArtIcon />,
    link: RouteName.ART,
    items: [
      {
        id: Math.random().toString(36).substring(2, 7).toString(),
        name: "Учебники",
        icon: <BookIcon />,
        link: BookRoutes.ART,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 7),
    name: "Англійська мова",
    icon: <HlsIcon />,
    link: RouteName.ENGLISH,
    items: [
      {
        id: Math.random().toString(36).substring(2, 7).toString(),
        name: "Словничок",
        icon: <ContentPasteIcon />,
        link: EnglishRoutes.DICTIONARY,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 7),
    name: "Всі книги",
    icon: <LibraryBooksIcon />,
    link: RouteName.SCHOOL_BOOKS,
    items: [
      {
        id: Math.random().toString(36).substring(2, 7).toString(),
        name: "2 клас",
        icon: <Filter2Icon />,
        link: FormRoutes.SECOND,
      },
      {
        id: Math.random().toString(36).substring(2, 7).toString(),
        name: "4 клас",
        icon: <Looks4Icon />,
        link: FormRoutes.FOURTH,
      },
    ],
  },
];

export const unLoggedUserMenuList: MenuItem[] = [
  {
    id: Math.random().toString(36).substring(2, 7).toString(),
    name: "Увійти",
    icon: <LoginIcon />,
    link: RouteName.LOGIN,
    // items: [{ id: Math.random().toString(36).substring(2, 7).toString(), name: 'Учебники', icon: <BookIcon />, link: BookRoutes.RUSSIAN }],
  },
  {
    id: Math.random().toString(36).substring(2, 7).toString(),
    name: "Зареєструватися",
    icon: <RegisterIcon />,
    link: RouteName.REGISTER,
    // items: [{ id: Math.random().toString(36).substring(2, 7).toString(), name: 'Учебники', icon: <BookIcon />, link: BookRoutes.RUSSIAN }],
  },
];

export const adminAdditionalMenuItems: MenuItem[] = [
  {
    id: Math.random().toString(36).substring(2, 7).toString(),
    name: "Адміністративна панель",
    icon: <AdminPanelIcon />,
    link: RouteName.ADMIN_PANEL,
    // items: [{ id: Math.random().toString(36).substring(2, 7).toString(), name: 'Учебники', icon: <BookIcon />, link: BookRoutes.RUSSIAN }],
  },
];
