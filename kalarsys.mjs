import { KALARSYS } from "./modules/config.mjs";

Hooks.once("init", async () => {
    console.log("KALARSYS | Initializing game system");

    CONFIG.KALARSYS = KALARSYS;
    CONFIG.INIT = true;

    //preloadHandlebarsTemplates();
    //registerHandlebarsHelpers();

});

Hooks.once("ready", async () => {
    CONFIG.INIT = false;
    console.log("KALARSYS | Ready!");
});