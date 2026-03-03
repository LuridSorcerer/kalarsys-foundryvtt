export class KalarsysActorSheet extends ActorSheet {

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["kalarsys","sheet","actor","character"],
            template: "systems/kalarsys-foundryvtt/templates/actor-sheet.hbs",
            width: 500,
            height: 500    
        })
    }
}