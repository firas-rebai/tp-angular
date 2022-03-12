import { personne } from "./personne";

export class personService {
    personnes : Array<personne> = []

    getPersons(){
        return this.personnes;
    }

}