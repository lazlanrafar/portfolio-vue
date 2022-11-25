const Project = {
  state: {
    loadingProject: false,
    reports: [
      {
        title: "Foodyar - Cooking Course Website",
        created: "Jan 25, 2022",
        image: "foodyar.webp",
        designer: "Buildwithangga",
        link: "https://foodyar-eight.vercel.app/",
        sourceCode: "https://github.com/lazlanrafar/foodyar",
        category: ["Vanilla", "Bootstrap"],
      },
      {
        title: "Resto - Restaurant App",
        created: "Nov 1, 2022",
        image: "resto.webp",
        designer: "Buildwith Angga",
        link: "https://resto-restaurant.vercel.app/",
        sourceCode: "https://github.com/lazlanrafar/resto-restaurant",
        category: ["Vanilla"],
      },
      {
        title: "Airplane - Airplane Ticket App",
        created: "Nov 1, 2022",
        image: "airplane.webp",
        designer: "Buildwith Angga",
        link: "https://github.com/lazlanrafar/airplane",
        sourceCode: "https://github.com/lazlanrafar/airplane",
        category: ["Flutter"],
      },
      {
        title: "Ocean Paradise - Backround Video Website",
        created: "Dec 23, 2021",
        image: "oceanparadise.webp",
        designer: "Online Tutorial",
        link: "https://oceanparadise.vercel.app/",
        sourceCode: "https://github.com/lazlanrafar/ocean-paradise",
        category: ["Vue.js"],
      },
      {
        title: "Moonlight - Parralax Website",
        created: "Dec 24, 2021",
        image: "moonlight.webp",
        designer: "Online Tutorial",
        link: "https://moonllight.vercel.app/",
        sourceCode: "https://github.com/lazlanrafar/moonllight",
        category: ["Vue.js", "Tailwind"],
      },
    ],
    report: [],
  },
  mutations: {
    SET_LOADING_PROJECT(state, payload) {
      state.loadingProject = payload;
    },
    SET_REPORT(state, payload) {
      state.report = payload;
    },
  },
  actions: {},
};

export default Project;
