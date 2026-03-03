import { KalarsysCharacterData } from "./models/actor-models.mjs";

import { KalarsysActorSheet } from "./sheets/actor-sheet.mjs";

Hooks.once("init", () => {
  CONFIG.Actor.dataModels.character = KalarsysCharacterData;
});

Actors.registerSheet("kalarsys", KalarsysActorSheet, {
  types: ["character"],
  makeDefault: true,
  label: "Kalarsys Character Sheet"
});