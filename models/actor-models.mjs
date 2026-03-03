const { TypeDataModel } = foundry.abstract;
const fields = foundry.data.fields;

export class KalarsysCharacterData extends TypeDataModel {
    static defineSchema() {
        return {
            exp: new fields.NumberField({ initial: 0, integer: true, min: 0 }),
            
            hp: new fields.SchemaField ({
                current: new fields.NumberField({ initial: 6, integer: true, min: 0 }),
                max:     new fields.NumberField({ initial: 6, integer: true, min: 0 }),
            }),

            categories: new fields.SchemaField({
                body:  new fields.NumberField({ initial: 2, integer: true, min: 1, max: 3 }),
                mind:  new fields.NumberField({ initial: 2, integer: true, min: 1, max: 3 }),
                skill: new fields.NumberField({ initial: 2, integer: true, min: 1, max: 3 }),
            }), 

            stats: new fields.SchemaField({
                str: new fields.NumberField({ initial: 2, integer: true, min: 1 }),
                vit: new fields.NumberField({ initial: 2, integer: true, min: 1 }),
                int: new fields.NumberField({ initial: 2, integer: true, min: 1 }),
                wil: new fields.NumberField({ initial: 2, integer: true, min: 1 }),
                dex: new fields.NumberField({ initial: 2, integer: true, min: 1 }),
                agi: new fields.NumberField({ initial: 2, integer: true, min: 1 }),
            })
        }
    }
}