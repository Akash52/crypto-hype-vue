module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
                    @import "node_modules/bootstrap/scss/_functions.scss";
                    @import "node_modules/bootstrap/scss/_variables.scss";
                `,
      },
    },
  },
};
