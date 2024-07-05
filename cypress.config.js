const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const path = require('path')
const fs = require('fs-extra')
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/features/execution/*.feature",
    supportFile: "cypress/support/e2e.js",
    experimentalInteractiveRunEvents: true,
    setupNodeEvents(on, config) {

      on('file:preprocessor', cucumber())

      // on('before:spec', async () => {
      //   const screenShotDirectory = path.join(__dirname, 'cypress/screenshots');
      //   console.log(`INFO......: Verificando a existência de ${screenShotDirectory}`);

      //   try {
      //     const exists = await fs.pathExists(screenShotDirectory);
      //     console.log(`INFO......: Existência do diretório: ${exists}`);

      //     if (exists) {
      //       console.log(`INFO......: Tentando deletar o diretório...`);
      //       await fs.remove(screenShotDirectory);
      //       console.log(`INFO......: Diretório deletado com sucesso!`);
      //     } else {
      //       console.log(`INFO......: Diretório não existe.`);
      //     }
      //   } catch (err) {
      //     console.error(`ERROR......: Falha ao deletar o diretório de screenshots.`, err);
      //   }
      // });

      cypressSplit(on, config)
      // IMPORTANT: return the config object
      return config
    },
  },
});
