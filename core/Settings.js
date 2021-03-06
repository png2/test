import {Constants} from './Constants';

/**
 * Contains all the settings of the application
 * Each sub object should correspond to a tab/group of option in the UI
 */
export class Settings {
    constructor(appPath) {
        this.appPath = appPath; // The path where the app started
        this.debug = true; // display debugs info
        // Dom informations
        this.domme = {
            directory: 'png Wicked Tease',
            level:1,
            apathy:1,
            orgasmChance:Constants.ALLOW_STATES.NEVER,
            ruinChance:Constants.ALLOW_STATES.NEVER,
            crazy: false
        };
        // Sub informations
        this.sub = {
            keySentences:{
                yes: 'yes, yeah, yep, yup, sure, of course, absolutely, you know it, definitely',
                no: 'no, nah, nope, not',
                greeting: 'hello, hi, hey, heya, good morning, good afternoon, good evening',
                thankYou: 'thank you, thanks, thank you very much, thanks a lot'
            },
            honorific: 'mistress',
            forceHonorific: true,
            forceCapitalizedHonorific: true,
            hasChastity: false,
            hasChastityPA: false,
            hasChastitySpikes: false,
            holdingEdgeMax: 0,
            birthday:{
                day:1,
                month:1,
                year:1980
            },
            writingTask:{
                min:1,
                max:5
            },
            petNames: ['slave','stroker','sub','pet']
        };
        // Images options and paths
        this.images ={
            general:'z:/img'
        };
        // Videos options and paths
        this.videos = {
            joi:'Z:/series',
                cockhero:'Z:/series'
        };
        // Ranges
        this.ranges = {
            orgasmChance: {
                "Never":0,
                "Always":100,
                "Rarely":25,
                "Sometimes":50,
                "Often":75
            },
            ruinChance: {
                "Never":0,
                "Always":100,
                "Rarely":25,
                "Sometimes":50,
                "Often":75
            },
            strokingSpeeds:[
                30,
                60,
                120,
                180,
                240
            ],
            teaseLength:{
                min:10,
                max:15,
                decideByLevel:false
            },
            tauntLength:{
                min:1,
                max:5,
                decideByLevel:false
            }
        }
    }
}