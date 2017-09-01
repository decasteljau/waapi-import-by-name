import * as wamp from './wamp-promise';
import * as fs from 'fs-extra';
import * as walk from 'klaw-sync';
import { ak } from './waapi';
import * as path from 'path';

if(process.argv.length != 3){
    console.log(`Invalid arguments`);
    process.exit();
}

var dir = process.argv[2];

async function main() {

    try {
        // Connect to WAAPI
        // Ensure you enabled WAAPI in Wwise's User Preferences
        var connection = await wamp.connect('ws://localhost:8080/waapi');

        // Obtain information about Wwise
        var wwiseInfo = await connection.call(ak.wwise.core.getInfo, {});
        console.log(`Connected to ${wwiseInfo.displayName} ${wwiseInfo.version.displayName}`);

        var options = {nodir:true,filter:(f)=>path.extname(f.path).toLowerCase() == '.wav'};
        var files = walk(dir, options);

        var imports = [];
        files.forEach(function(f:walk.Item){
            // File names are all structured the same way. They follow the convention:
            // <Name>_<Type>_<Surface>_<Variation#>
            // ex: Footstep_Crouching_Concrete_01
            var filename = path.basename(f.path);
            var matches = filename.match(/^(\w+)_(\w+)_(\w+)_(\d+).wav$/i);
            
            // Top switch container
            imports.push({
                switchAssignation: `<Switch Group:FootStepType>${matches[2]}`,
                objectPath: `\\Actor-Mixer Hierarchy\\Default Work Unit\\<Switch Container>${matches[1]}\\<Switch Container>${matches[2]}`
            });

            // Middle Switch container
            imports.push({
                switchAssignation: `<Switch Group:Surface>${matches[3]}`,
                objectPath: `\\Actor-Mixer Hierarchy\\Default Work Unit\\<Switch Container>${matches[1]}\\<Switch Container>${matches[2]}\\<Random Container>${matches[3]}`
            });            

            // SFX
            imports.push({
                audioFile: f.path,
                objectPath: `\\Actor-Mixer Hierarchy\\Default Work Unit\\<Switch Container>${matches[1]}\\<Switch Container>${matches[2]}\\<Random Container>${matches[3]}\\<Sound SFX>${path.basename(f.path, '.wav')}`
            });
        });

        let importArgs = {
            importOperation: "useExisting",
            default: {
                importLanguage: "SFX"
            },
            imports: imports
        };        

        // Import!
        var wwiseInfo = await connection.call(ak.wwise.core.audio.import_, importArgs);

        await connection.disconnect();
    }
    catch (e) {
        console.log(e);
    }

    process.exit();
}

main();


