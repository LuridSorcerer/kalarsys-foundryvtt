class KalarsysActorSheet extends ActorSheet {

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: "systems/kalarsys-foundryvtt/templates/actor-sheet.hbs",
      width: 650,
      height: 500,
    });
  }

}

// Register the sheet
Actors.registerSheet("kalarsys", KalarsysActorSheet, {
  types: ["character"],
  makeDefault: true
});
