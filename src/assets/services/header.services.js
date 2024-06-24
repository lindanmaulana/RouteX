export const dataNavbar = [
  {
    title: "HOME",
    router: "/",
  },
  {
    title: "ABOUT US",
    router: "/about",
  },
  {
    title: "SERVICES",
    router: "/",
  },
  {
    title: "PROJECTS",
    router: "/",
  },
  {
    title: "BLOG",
    router: "/",
  },
  {
    title: "PAGE",
    router: "/",
  },
  {
    title: "CONTACT",
    router: "/",
  },
];

const key = {
  home: "HOME",
  about: "ABOUT US",
  services: "SERVICES",
  projects: "PROJECTS",
  blog: "BLOG",
  page: "PAGE",
  contact: "CONTACT",
};

export const routerNavigasi = (params) => {
  if (params === key.home) {
    const router = [
      {
        title: "Visa Services",
        router: "/",
      },
      {
        title: "Immigration Services",
        router: "/immigration-services",
      },
    ];

    return router;
  } else if (params === key.about) {
    const router = [
      {
        title: "About",
        router: "/about",
      },
      {
        title: "Sucess Story",
        router: "/succes-story",
      },
      {
        title: "Story Details",
        router: "/story-details"
      },
    ];
    return router;
  } else if(params === key.services) {
    const router = [
        {
            title: "Visa Offers",
            router: "/"
        },
        {
            title: "Pricing Tables",
            router: "/"
        },
        {
            title: "Coaching",
            router: "/"
        },
        {
            title: "Visa",
            router: "/"
        },
        {
            title: "Countries",
            router: "/"
        },
        {

        }
    ]

    return router

  }else if(params === key.blog) {
    const router = [
        {
            title: "Blog",
            router: "/"
        },
        {
            title: "Blog Details",
            router: "/"
        }
    ]

    return router
  }else if(params === key.projects) {
    const router = [
        {
            title: "Team",
            router: "/"
        }
    ]

    return router
  }else if(params === key.contact) {
    const router = [
        {
            title: "Faq",
            router: "/"
        },
        {
            title: "Contact",
            router: "/"
        }
    ]

    return router
  }
};

export const dataRouter = {
  routerMain: (params) => {
    if (params === key.home) {
      const router = [
        {
          title: "Home Visa Services",
          router: "/",
        },
        {
          title: "Home Immigration Services",
          router: "/home-immigration-services",
        },
      ];

      return router;
    } else if (params === key.about) {
      return null;
    }
  },
};
