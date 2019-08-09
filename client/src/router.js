import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import OrderQueue from "@/views/OrderQueue.vue";
import OnlineOrder from "@/views/OnlineOrder.vue";
import EmployeeOrder from "@/views/EmployeeOrder.vue";
import EmployeePortal from "@/views/EmployeePortal.vue";
import EmployeeIndex from "@/views/EmployeeIndex.vue";
import TableService from "@/views/TableService.vue";
import TakeOut from "@/views/TakeOut.vue";
import ManagerPortal from "@/views/ManagerPortal.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/OrderQueue",
      name: "orderqueue",
      component: OrderQueue,
    },
    {
      path: "/OnlineOrder",
      name: "onlineorder",
      component: OnlineOrder,
    },
    {
      path: "/EmployeeOrder",
      name: "employeeorder",
      component: EmployeeOrder,
    },
    {
      path: "/EmployeePortal",
      name: "employeeportal",
      component: EmployeePortal,
    },
    {
      path: "/EmployeeIndex",
      name: "employeeindex",
      component: EmployeeIndex,
    },
    {
      path: "/TableService",
      name: "tableservice",
      component: TableService,
    },
    {
      path: "/TakeOut",
      name: "takeout",
      component: TakeOut,
    },
    {
      path: "/ManagerPortal",
      name: "managerportal",
      component: ManagerPortal,
    }
  ]
});
