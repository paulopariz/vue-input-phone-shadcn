// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "nuxt-phosphor-icons", "@nuxtjs/color-mode"],

  ssr: false,

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Vue Input Phone Shadcn",
      meta: [
        {
          name: "description",
          content:
            "The Vue Input Phone Shadcn library is an open source project, based on Shadcn. It offers an excellent component for entering phone numbers, supporting 194 countries, with automatic formatting and advanced validation to detect invalid formats. Plus, it's highly customizable.",
        },
        {
          name: "keywords",
          content: "Vue, Nuxt, component phone, library, shadcn, tailwind, typescript",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          property: "og:title",
          content: "Vue Input Phone Shadcn",
        },
        {
          property: "og:description",
          content:
            "The Vue Input Phone Shadcn library is an open source project, based on Shadcn. It offers an excellent component for entering phone numbers, supporting 194 countries, with automatic formatting and advanced validation to detect invalid formats. Plus, it's highly customizable.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://github.com/paulopariz/vue-input-phone-shadcn",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/icon.svg" }],
    },
  },

  colorMode: {
    classSuffix: "",
  },

  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});
3;
