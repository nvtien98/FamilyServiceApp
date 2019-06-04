import Dashboard from "views/Dashboard/Dashboard.jsx";
import Buttons from "views/Components/Buttons.jsx";
import GridSystem from "views/Components/GridSystem.jsx";
import Charts from "views/Charts/Charts.jsx";
import Calendar from "views/Calendar/Calendar.jsx";
import Widgets from "views/Widgets/Widgets.jsx";
import Feedback from "feedback/FeedbackPage";

import pagesRoutes from "./pages.jsx";
// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import GridOn from "@material-ui/icons/GridOn";
import WidgetsIcon from "@material-ui/icons/Widgets";
import Timeline from "@material-ui/icons/Timeline";
import DateRange from "@material-ui/icons/DateRange";

var pages = [
].concat(pagesRoutes);

var dashRoutes = [
  {
    path: "/sua_thiet_bi_gia_dinh", name: "Sữa thiết bị gia đình", icon: DashboardIcon, component: Dashboard },
  { path: "/xaydung_diennuoc", name: "Xây dựng, điện nước", icon: WidgetsIcon, component: Widgets },
  { path: "/dich_vu_van_phong", name: "Dịch vụ văn phòng", icon: Timeline, component: Charts },
  { path: "/dich_vu_gia_dinh", name: "Dịch vụ gia đình", icon: DateRange, component: Calendar },
  { path: "/cac_loai_xe", name: "Ô tô, xe điện, xe máy", icon: Image, component: Buttons },
  { path: "/phan_hoi", name: "Phản hồi từ khách hàng", icon: GridOn, component: Feedback },
  { redirect: true, path: "/sua_thiet_bi_gia_dinh", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
