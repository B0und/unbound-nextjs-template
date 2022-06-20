module.exports = {
  i18n: {
    defaultLocale: "us",
    locales: ["us", "ru"],
  },

  // reload translation files for development
  reloadOnPrerender: process.env.NODE_ENV !== "production",
};
