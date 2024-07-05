const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const path = require('path')
const fs = require('fs-extra')

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/features/execution/*.feature",
    supportFile: "cypress/support/e2e.js",
    experimentalInteractiveRunEvents: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())

      // on('before:run', async () => {
      //   const screenShotDirectory = path.join(__dirname, 'cypress/screenshots')
      //   if (fs.existsSync(screenShotDirectory)) {
      //     fs.rm(screenShotDirectory, { recursive: true }, () => {
      //       console.log(`INFO......: Deleting screenshot ${screenShotDirectory}`);
      //       console.log(`INFO......: screenshot deleted sucessfully!...........`);
      //     })
      //   }
      // })

      // on('before:run', async () => {
      //   const screenShotDirectory = path.join(__dirname, 'cypress/screenshots');
      //   try {
      //     const exists = await fs.access(screenShotDirectory).then(() => true).catch(() => false);
      //     if (exists) {
      //       await fs.rm(screenShotDirectory, { recursive: true });
      //       console.log(`INFO......: Deleting screenshot ${screenShotDirectory}`);
      //       console.log(`INFO......: Screenshot deleted successfully!`);
      //     }
      //   } catch (err) {
      //     console.error(`ERROR......: Failed to delete screenshot directory.`, err);
      //   }
      // });

      // on('before:run', async () => {
      //   const screenShotDirectory = path.join(__dirname, 'cypress/screenshots');
      //   try {
      //     if (await fs.pathExists(screenShotDirectory)) {
      //       await fs.remove(screenShotDirectory);
      //       console.log(`INFO......: Deleting screenshot ${screenShotDirectory}`);
      //       console.log(`INFO......: Screenshot deleted successfully!`);
      //     }
      //   } catch (err) {
      //     console.error(`ERROR......: Failed to delete screenshot directory.`, err);
      //   }
      // });

      on('before:spec', async () => {
        const screenShotDirectory = path.join(__dirname, 'cypress/screenshots');
        console.log(`INFO......: Verificando a existência de ${screenShotDirectory}`);

        try {
          const exists = await fs.pathExists(screenShotDirectory);
          console.log(`INFO......: Existência do diretório: ${exists}`);

          if (exists) {
            console.log(`INFO......: Tentando deletar o diretório...`);
            await fs.remove(screenShotDirectory);
            console.log(`INFO......: Diretório deletado com sucesso!`);
          } else {
            console.log(`INFO......: Diretório não existe.`);
          }
        } catch (err) {
          console.error(`ERROR......: Falha ao deletar o diretório de screenshots.`, err);
        }
      });
    },
  },
});
