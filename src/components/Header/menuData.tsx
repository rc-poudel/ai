import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Product",
    newTab: false,
    submenu: [ 
      {
        id: 50,
        title: "Chatbot",
        path: "/about",
        newTab: false,
      },
      {
        id: 51,
        title: "PathAl",
        path: "/about",
        newTab: false,
      },
      {
        id: 52,
        title: "Face recognition",
        path: "/about",
        newTab: false,
      },
      {
        id: 53,
        title: "Robotics",
        path: "/about",
        newTab: false,
      },
    ]
  },
  // {
  //   id: 2,
  //   title: "About",
  //   path: "/about",
  //   newTab: false,
  // },
  {
    id: 2,
    title: "Solution",
    newTab: false,
    submenu: [ 
      {
        id: 60,
        title: "Geo Marketing",
        path: "/about",
        newTab: false,
      },
      {
        id: 61,
        title: "Revenue Prediction",
        path: "/about",
        newTab: false,
      }
    ]
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 34,
    title: "Case Studies",
    path: "/blog",
    newTab: false,
  },
  {
    id: 35,
    title: "Insights & Reports",
    path: "/blog",
    newTab: false,
  },
  // {
  //   id: 3,
  //   title: "Support",
  //   path: "/contact",
  //   newTab: false,
  // },
  {
    id: 9,
    title: "Pricing",
    path: "#pricing",
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Blog Grid Page",
  //       path: "/blog",
  //       newTab: false,
  //     },
  //     {
  //       id: 44,
  //       title: "Blog Sidebar Page",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
