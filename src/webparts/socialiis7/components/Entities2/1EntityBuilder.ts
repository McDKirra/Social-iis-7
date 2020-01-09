
import { IEntity } from '../ISocialiis7Props';

import * as ents from './index';

export function buildEntities2() {
    let Entities : IEntity[] = [];
    console.log('ents', ents);
    Entities.push(addTitleKey(ents.GM()));
    Entities.push(addTitleKey(ents.Ford()));
    Entities.push(addTitleKey(ents.FCA()));
    Entities.push(addTitleKey(ents.Tesla()));
    return Entities;
}

export function addTitleKey(Entity : IEntity ) {

    let result : IEntity = Entity;
    result.titleKey = result.title.replace(" ", "");
    return result;

}