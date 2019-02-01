import UserProfile from "views/UserProfile/UserProfile";
import Report from "views/Report/Report";

const dashboardRoutes = [
  {
    path: "/user",
    name: "OM MIG",
    icon: "pe-7s-user",
    component: UserProfile,
    parameters: {name:"baluba", year:12}
  },
  {
    path: "/report/kmom01",
    name: "KMOM01",
    icon: "pe-7s-news-paper",
    component: Report,
    parameters: "kmom01"
  },
  {
    path: "/report/kmom02",
    name: "KMOM02",
    icon: "pe-7s-news-paper",
    component: Report,
    parameters: "kmom02"
  },
  { redirect: true, path: "/", to: "/user", name: "Om mig" }
];

export default dashboardRoutes;
