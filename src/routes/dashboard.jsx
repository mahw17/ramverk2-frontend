import UserLogin from "views/User/UserLogin";
import UserProfile from "views/User/UserProfile";
import Report from "views/Report/Report";
import ReportAdd from "views/Report/ReportAdd";
import Message from "views/Message/Message";


const dashboardRoutes = [
    {
      path: "/user/login",
      name: "LOGGA IN",
      icon: null,
      component: UserLogin,
      parameters: null,
      visible: false
    },
  {
    path: "/user",
    name: "OM MIG",
    icon: "pe-7s-user",
    component: UserProfile,
    parameters: {name:"baluba", year:12},
    visible: true
  },
  {
      path: "/report/add",
      name: "SKAPA NY RAPPORT",
      icon: "pe-7s-news-paper",
      component: ReportAdd,
      parameters: "loginReq",
      visible: true
  },
  {
    path: "/report/kmom01",
    name: "KMOM01",
    icon: "pe-7s-news-paper",
    component: Report,
    parameters: "kmom01",
    visible: true
  },
  {
    path: "/report/kmom02",
    name: "KMOM02",
    icon: "pe-7s-news-paper",
    component: Report,
    parameters: "kmom02",
    visible: true
  },
  {
    path: "/report/kmom03",
    name: "KMOM03",
    icon: "pe-7s-news-paper",
    component: Report,
    parameters: "kmom03",
    visible: true
  },
  {
    path: "/message",
    name: "MEDDELANDE",
    icon: null,
    component: Message,
    parameters: null,
    visible: false
  },
  { redirect: true, path: "/", to: "/user", name: "Om mig" }
];

export default dashboardRoutes;
