/**
 * @author Rishabh Anand <ranand16@gmail.com>
 * 
 */

import { uuid } from 'uuidv4'

export default class IdGenerator {
    constructor() {
    }

    /**
     * To generate a new unique id
     */
    public generateNewId = ():String => {
        return uuid()
    }
}