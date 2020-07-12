# Disaster resiliency in the context of climate change 

This solution starter was created by the United Nations Human Rights Office in Geneva, Switzerland, on February 27-28, 2020. It features contributions by technologists from Unity, Johnson & Johnson, and Red Hat. 

## Authors

* Scott Sewell - Unity
* Jochen Bertels - JNJ
* DeveloperSteve Coochin - IBM
* Joshua Zheng - IBM

## Contents

1. [Overview](#overview)
2. [Video](#video)
3. [The idea](#the-idea)
4. [How it works](#how-it-works)
5. [Diagrams](#diagrams)
6. [Documents](#documents)
7. [Datasets](#datasets)
8. [Technology](#technology)
9. [Getting started](#getting-started)
9. [Resources](#resources)
10. [License](#license)

## Overview

### What's the problem?

Natural disasters kill an estimated 90,000 people and affect close to 160 million people worldwide every year, according to the World Health Organization. Severe weather events in particular have been increasing in frequency and intensity over the past decade and scientists believe climate change is a significant factor.

Read the [Sendai Framework for Disaster Risk Reduction](https://www.undrr.org/implementing-sendai-framework/what-sf) to see how we make our communities safer and more resilient to disasters.

### How can technology help?

Technology can help our society better prepare for and respond to natural disasters. Specific use cases include reducing exposure to hazards, lessening vulnerability of people and property, wise management of land and the environment, and improving preparedness and early warning for adverse weather events that are gaining in frequency through climate change.

## Video

[![Call for Code Solution Starter: Water sustainability in the context of climate change ](./images/video-thumbnail.png)](https://youtu.be/3wsfFKRcT-g)

## The idea

Due to climate change, floods are becoming more frequent and more severe, leading to specific issues for affected communities. This solution starter kit aims to reduce mortality rates by helping potential victims better prepare for, act during, and recover from a flood. Using a mobile application that helps users share knowledge of best practices and facilitates communities organizing themselves, communities will be able to reduce mortality rates and mitigate economic damage so they can recover faster after a flood.

## How it works

The goal of the application is to provide an end-to-end solution to help potential victims combat floods. The team approached the problem by breaking it down into three phases: before the flood, during the flood, and after the flood.

Before the flood, the user is presented a checklist of best practices on how to prepare for the upcoming flood. The checklist is derived from the Sendak Framework for disaster preparedness, along with recommendations from seasoned search and rescue professionals. The application will also enable the local authorities to communicate with the user to better enforce disaster preparedness.

In the event of a flood, the app will switch into emergency mode. This mode can be activated by either the user or the local authorities. While in this mode, the app displays a simple evacuation route to the nearest shelter that still has capacity.

After the flood, the app will provide post-flood best practices to help victims rebuild their homes. The app will also enable a community marketplace, providing a platform for residents to trade resources and help push the economy to recover.

By combining IBM Data & AI offerings with HERE Technologies' Location Services, a developer can quickly get started building such a solution. The starter kit offers a React Native template that has integration with Watson Assistant and HERE Technologies' Location Services prebuilt, helping developers jump-start the development process.

## Diagrams

![Disaster resiliency architecture diagram](/images/architecture-diagram.png)

This solution starter idea combines machine learning and location services with real-time information to get users the information they need to take action quickly.

1. The user launches the mobile app and can access information across multiple services.
1. The user can ask questions to Watson Assistant and get answers to flood planning and recovery-related questions.
1. The user can access recommendations on flood preparation checklists and best practices with Watson Machine Learning.
1. The user receives real-time weather updates from The Weather Company.
1. The user can obtain geolocation data for safety points and plot evacuation routes using HERE Location Services.

## Documents

- [Terminology on disaster risk reduction](https://www.unisdr.org/we/inform/terminology)
- [Using global indicators to measure progress](https://www.unisdr.org/files/54970_techguidancefdigitalhr.pdf)
- [Words into Action guidelines: Enhancing disaster preparedness for effective response](https://www.preventionweb.net/publications/view/53347)
- [Health care challenges during and after a natural disaster](https://developer.ibm.com/callforcode/blogs/health-care-challenges-during-and-after-a-natural-disaster)
- [IBM Code and Response: COVID-19](https://developer.ibm.com/podcasts/ibm_developer_podcast/015-john-walicki-code-and-response-covid-19/)

## Data sets

- [Malawi Spatial Data Platform (MASDAP)](http://www.masdap.mw/)
- [Land Usage from MASDAP](http://www.masdap.mw/layers/osm:osm_landusages)
- [Malawi Disaster & Risk Profile](https://www.preventionweb.net/countries/mwi/data/)
- [Disparities in Cellphone Ownership Pose Challenges in Africa](https://news.gallup.com/poll/189269/disparities-cellphone-ownership-pose-challenges-africa.aspx)
- [Data.gov disaster data sets](https://catalog.data.gov/dataset?q=disaster)
- [HERE Geocoding and Search](https://developer.here.com/products/geocoding-and-search)


## Technology

**IBM Cloud Services**
- [Generate insights from multiple data sources](https://developer.ibm.com/patterns/generate-insights-from-multiple-data-sources-using-watson-studio/)
- [Transform and load big data CSV files into a database](https://developer.ibm.com/patterns/transform-load-big-data-csv-files-db2-zos-database/)
- [2018 Finalist PD3R](https://developer.ibm.com/blogs/call-for-code-finalist-pd3r-uses-artificial-intelligence-for-retrofitting/)
- [Create domain-specific bots using an agent bot](https://developer.ibm.com/patterns/compose-bots-using-an-agent-bot/)
- [Automate post-disaster checks using drone imagery](https://developer.ibm.com/technologies/iot/patterns/automate-post-disaster-checks-and-foster-offline-communication)
- [Configuring mesh networking for the IoT](https://developer.ibm.com/technologies/iot/tutorials/create-iot-mesh-network)
- [Build and deploy a disaster donations website with end-to-end encryption](https://developer.ibm.com/technologies/systems/patterns/systems-create-a-secure-disaster-donations-website)
- [Build a chatbot for your mobile app](https://developer.ibm.com/patterns/building-a-chatbot-with-kubernetes-watson-assistant-and-elastic-search/)
- [Rapid development of a scalable mobile application](https://developer.ibm.com/videos/demo-of-ibm-developer-mobile-app/)

**HERE Location Services**
- [HERE.com API Key](https://developer.here.com/ref/IBM_starterkit_Disasters2020?create=Freemium-Basic)
- [HERE Maps](https://developer.here.com/products/maps)
- [HERE Routing](https://developer.here.com/products/routing)
- [Integrate interactive maps and location features into your application](https://developer.here.com/documentation/)

## Getting started

Use the following steps to get this starter kit up and running. The starter kit is composed of a React Native front end and a Node.js back end. The application includes a chatbot powered by Watson Assistant that answers questions about flood emergencies and integrates map and location services provided by HERE Technologies.

### Prerequisite

- Register for an [IBM Cloud](https://www.ibm.com/account/reg/us-en/signup?formid=urx-42793&eventid=cfc-2020?cm_mmc=OSocial_Blog-_-Audience+Developer_Developer+Conversation-_-WW_WW-_-cfc-2020-ghub-starterkit-disaster_ov75914&cm_mmca1=000039JL&cm_mmca2=10008917) account.
- Install and configure [IBM Cloud CLI](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#overview).
- Register for a [HERE](https://developer.here.com/ref/IBM_starterkit_Disasters2020?create=Freemium-Basic) account.
- Install [React Native CLI dependencies](https://reactnative.dev/docs/getting-started.html).
    - [Node.js](https://nodejs.org/en/)
    - [Watchman](https://facebook.github.io/watchman/docs/install)
    - **iOS only**
        - [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
        - [CocoaPods](https://guides.cocoapods.org/using/getting-started.html)
    - **Android only**
        - [Java Development Kit](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)
        - [Android Studio](https://developer.android.com/studio/index.html) - add Android 9 (Pie) SDK & configure `ANDROID_HOME`
        - [Create an Android Virtual Device (AVD)](https://developer.android.com/studio/run/managing-avds.html) - with Pie image (API Level 28)
- Clone the [repository](https://github.com/Call-for-Code/Solution-Starter-Kit-Disasters-2020).

### Steps

1. [Set up an instance of Watson Assistant](#1-set-up-an-instance-of-watson-assistant).
1. [Generate an API Key from the HERE Developer Portal](#2-generate-an-api-key-from-the-here-developer-portal).
1. [Run the server](#3-run-the-server).
1. [Run the mobile application](#4-run-the-mobile-application).

### 1. Set up an instance of Watson Assistant

Log in to IBM Cloud and provision a Watson Assistant instance.

1. Provision an instance of **Watson Assistant** from the [IBM Cloud catalog](https://cloud.ibm.com/catalog/services/watson-assistant).
1. Launch the Watson Assistant service.
1. [Create an **Assistant**](https://cloud.ibm.com/docs/assistant?topic=assistant-assistant-add).
1. [Add a dialog skill](https://cloud.ibm.com/docs/assistant?topic=assistant-skill-dialog-add) to the **Assistant** by importing the [`starter-kit-flood-dialog-skill.json`](./starter-kit/assistant/starter-kit-flood-dialog-skill.json) file.
1. Go back to All Assistants page, open **Settings** from the action menu ( **`⋮`** ) and click on **API Details**.
1. Note the **Assistant ID** and **API Key**. From the **Assistant URL**, make note of the base URL/domain (e.g., `https://api.us-south.assistant.watson.cloud.ibm.com` or `https://api.eu-gb.assistant.watson.cloud.ibm.com`) but do not include the directory/path.
1. Go to **Preview Link** to get a link to test and verify the dialog skill.

### 2. Generate an API Key from the HERE Developer Portal

The application uses HERE Location Services for maps, searching, and routing.

To access these services, an API Key is required. Follow the instructions outlined in the [HERE Developer Portal](https://developer.here.com/ref/IBM_starterkit_Disasters2020?create=Freemium-Basic) to [generate a JavaScript API Key](https://developer.here.com/documentation/authentication/dev_guide/topics/api-key-credentials.html).

### 3. Run the server

To set up and launch the server application:

1. Go to the `starter-kit/server-app` directory of the cloned repo.
1. Copy the `.env.example` file in the `starter-kit/server-app` directory, and create a new file named `.env`.
1. Edit the newly created `.env` file and update the `ASSISTANT_ID`, `ASSISTANT_IAM_APIKEY`, and `ASSISTANT_URL` with the values from the dialog skill's API Detail page in Watson Assistant.
1. Edit the **name** value in the `manifest.yml` file to your application name (for example, _my-app-name_).
1. From a terminal:
    1. Go to the `starter-kit/server-app` directory of the cloned repo.
    1. Install the dependencies: `npm install`.
    1. Launch the server application locally or deploy to IBM Cloud:
        - To run locally:
            1. Start the application: `npm start`.
            1. The server can be accessed at http://localhost:3000.
        - To deploy to IBM Cloud:
            1. Log in to your IBM Cloud account using the IBM Cloud CLI: `ibmcloud login`.
            1. Target a Cloud Foundry org and space: `ibmcloud target --cf`.
            1. Push the app to IBM Cloud: `ibmcloud app push`.
            1. The server can be accessed at the URL shown in the console (`routes`) after the app successful uploads and starts (for example,  https://solution-starter-kit-disasters-2020-server-random-route.bluemix.net).

### 4. Run the mobile application

To run the mobile application (using the Xcode iOS Simulator or Android Studio Emulator):

1. Go to the `starter-kit/mobile-app` directory of the cloned repo.
1. Copy the `.env.example` file in the `starter-kit/mobile-app` directory, and create a file named `.env`.
1. Edit the newly created `.env` file.
    - Update the `STARTER_KIT_SERVER_URL` with the URL to the server app launched in the previous step.
        > **Note**: If you are running the server locally and testing with the Android Emulator set the `STARTER_KIT_SERVER_URL` using the local machine's URL (e.g., `http://10.0.2.2:3000`) instead of `localhost`
    - Update the `HERE_APIKEY` with the API Key generated in the HERE Developer Portal.
1. From a terminal:
    1. Go to the `starter-kit/mobile-app` directory.
    1. Install the dependencies: `npm install`.
    1. **iOS only**: Go to the `ios` directory: `cd ios`.
    1. **iOS only**: Install pod dependencies: `pod install`.
    1. **iOS only**: Return to the `mobile-app` directory: `cd ../`.
    1. Launch the app in the simulator/emulator:
        - **iOS only**: `npm run ios`
            > **Note**: You should be running at least iOS 13.0. The first time you launch the simulator, you should ensure that you set a Location in the Features menu.
        - **Android only**: `react-native run-android`
            > **Note**: Your Android Studio needs to have the `Android 9 (Pie)` SDK and a `Pie API Level 28` virtual device
    1. **Android only**: Open Android Studio and setup the project with the android folder. 
    1. **Android only**: Open Android Virtual Device Manager and launch the virtual device installed.
    1. **Android only**: Click on Debug in Android Studio.
            

## Resources

- [IBM Cloud](https://www.ibm.com/cloud)
- [Watson Assistant](https://cloud.ibm.com/docs/assistant?topic=assistant-getting-started)
- [HERE Location Services](https://developer.here.com/documentation)
- [React Native](https://reactnative.dev/)

## License

This solution starter is made available under the [Apache 2 License](LICENSE).
