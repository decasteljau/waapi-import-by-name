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

`tsc -p .`

## Preparation

First, ensure WAAPI is enabled in Wwise:
 - menu **Project/Preferences**
 - Check **Enable Wwise Authoring API**
 - Click **OK**
 - Restart Wwise

Then, this sample is using the WAV files provided in the Wwise **Sample Project**.

 - Install Wwise, with the **Sample Project** option
 - Locate the footstep WAV files in the sample project folder:
   typically: `C:\Program Files (x86)\Audiokinetic\Wwise 2017.1.0.6302\SampleProject\Originals\SFX\Footstep`

## Execution

1. Prepare files in a directory following a naming convention:
    - ddd
1. Open a Wwise Project. (not the Sample Project)
1. Run the following commands from the directory containing index.js, specify the correct footstep folder:

    `node index.js "C:\...\SFX\Footstep"`
