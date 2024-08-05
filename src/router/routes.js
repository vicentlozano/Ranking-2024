const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "home",
        path: "/home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        name: "ranking",
        path: "Ranking",
        component: () => import("pages/RankingPage.vue"),
      },
      {
        name: "games",
        path: "Games",
        component: () => import("pages/GamePage.vue"),
      },
      {
        name: "photos",
        path: "Photos",
        component: () => import("pages/PhotoPage.vue"),
      },
      {
        name: "chat",
        path: "Chat",
        component: () => import("pages/ChatPage.vue"),
      },
      {
        name: "instagram",
        path: "Instagram",
        component: () => import("pages/InstagramPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
