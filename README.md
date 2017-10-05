# waapi-import-by-name

## Overview

This samples demonstrates how to:
- Connect to Wwise with the Wwise Authoring API (WAAPI),
- Loop over files in a directory,
- Follow a naming convention to define how to import,
- Create Wwise objects, and importing audio files to Wwise,
- Use Typescript, async/await and Node.js.

## Requirements

1. [Node.js](https://nodejs.org)
1. [git](https://git-scm.com/downloads)

## Setup

It works best with Visual Studio Code. Ensure you have typescript 2.x+ installed. Run the following commands.

Install dependencies:

`npm install`

Build Typescript:

`npm run build`

## Preparation

Note: Use Wwise 2017.1.2 or +.

First, ensure WAAPI is enabled in Wwise:
 - menu **Project/Preferences**
 - Check **Enable Wwise Authoring API**
 - Click **OK**
 - Restart Wwise

Then, this sample is using the WAV files provided in the Wwise **Sample Project**.

 - Install Wwise, with the **Sample Project** option
 - Locate the footstep WAV files in the sample project folder:
   typically: `C:\Program Files (x86)\Audiokinetic\Wwise 20???.?.?.????\SampleProject\Originals\SFX\Footstep`

## Execution

1. Prepare footsteps files in a directory following a naming convention:
    - `<Name>_<Type>_<Surface>_<Variation#>.wav`:
        - **Name**: Name of the top container
        - **Type**: Type of movement
        - **Surface**: Type of surface
        - **Variation#**: Id of variation
1. Open a Wwise Project. (not the Sample Project)
1. Run the following commands from the directory containing index.js, specify the correct footstep folder:

    `node index.js "C:\...\SFX\Footstep"`

Example of file names:

    Footstep_Walking_Gravel_01.wav
    Footstep_Walking_Gravel_02.wav
    Footstep_Walking_Gravel_03.wav
    Footstep_Walking_Hardmetal_01.wav
    Footstep_Walking_Hardmetal_02.wav
    Footstep_Walking_Hardmetal_03.wav
    Footstep_Walking_Hardwood_01.wav
    Footstep_Walking_Hardwood_02.wav
    Footstep_Crouching_Concrete_01.wav
    Footstep_Crouching_Concrete_02.wav
    Footstep_Crouching_Gravel_01.wav
    Footstep_Crouching_Gravel_02.wav
    Footstep_Crouching_Gravel_06.wav
    Footstep_Crouching_Hardmetal_01.wav
    Footstep_Crouching_Hardmetal_02.wav
    Footstep_Running_Concrete_01.wav
    Footstep_Running_Concrete_02.wav
    Footstep_Running_Gravel_01.wav
    Footstep_Running_Gravel_02.wav
    Footstep_Running_Hardmetal_01.wav
    Footstep_Running_Hardmetal_02.wav
