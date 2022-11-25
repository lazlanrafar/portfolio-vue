const Work = {
  state: {
    loadingWork: false,
    reports: [
      {
        title: "Silaju - Motor Vehicle Sales Report System",
        description:
          "Information System for Sales of Motorized Vehicles in batam city",
        link: "http://104.248.156.113:3021/",
        codeTools: ["Vue.js", "Node.js", "PostgreSQL"],
        design: "Design by Kuadran",
        img: "silaju.webp",
      },
      {
        title: "Lajupay - Tax payment app",
        description:
          "Lajupay is an application to pay annual vehicle tax in the Riau Islands without having to queue.",
        link: "",
        codeTools: ["React Native", "Figma", "Firebase"],
        design: "Design by Kuadran",
        img: "lajupay.webp",
      },
      {
        title: "Estatix - Housing app",
        description:
          "Estatix is an application to pay housing tax in the Riau Islands without having to queue.",
        link: "",
        codeTools: ["React Native", "Vue.js", "Figma", "Firebase"],
        design: "Design by Kuadran",
        img: "estatix.webp",
      },
      {
        title: "Jurnal Ilmu Administrasi Public - UNISRI",
        description:
          "This is my first project to make UI together with the team using figma, this is a website that contains personal scientific journals from UNISRI university",
        link: "https://www.figma.com/file/PkrvcVMMNDPHSZbdcHYj4Q/JIAP---Universitas-Slamet-Riyadi?node-id=0%3A1",
        codeTools: ["Figma"],
        design: "Design by Me & @alzdesco",
        img: "jiap.webp",
      },
    ],
  },
  mutations: {
    SET_LOADING_WORK(state, payload) {
      state.loadingWork = payload;
    },
  },
  actions: {},
};

export default Work;
