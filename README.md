# Disaster resiliency in the context of climate change 

This solution starter was created by at the United Nations Human Rights Office in Geneva, Switzerland on February 27-28, 2020. It features contributions by technologists from Unity, Johnson & Johnson, and Red Hat. 

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

Whether it's third-party open source projects or IBM Cloud services, technologies like data analytics, Internet of Things, artificial intelligence, and blockchain can help address global environmental challenges such as water quantity and quality. Using water more efficiently will reduce greenhouse gases from treatment systems. 

## Video

[![Call for Code Solution Starter: Water sustainability in the context of climate change ](https://img.youtube.com/vi/hC2b-iP6Rxc/0.jpg)](https://www.youtube.com/watch?v=hC2b-iP6Rxc)

## The idea

The team tackled the challenges that come in the process of rebuilding after the impact of a disaster. Research has shown that rapid yet well-informed and well-orchestrated rebuilding measures can help to massively reduce the negative impact of disasters on the life, well-being, and health of individuals. An effective and efficient system of accessing information and contributing feedback in a way that can improve the foundation of future decisions is key to this cycle.

In order to leverage the benefits of such a system it must be designed to allow for simple ingestion of information, data, images along with a user-friendly way of drawing insights from it. The team created a platform-based solution that aggregates and analyzes historical and current data related to infrastructure, agriculture, weather, utility and more. It can then be used to derive key insights for future response and reconstruction plans. 

## How it works

The goal of this solution is to provide a better feedback loop that empowers local municipalities, small business owners, and members of the community, especially the most vulnerable. The team approached this problem by looking how a solution could benefit three potential end users who need access to information about the current situation, resources available to them, and how to better prepare next time:

1. A disaster victim, who seeks information on how to improve her community by best matching her skills to volunteer opportunities.
1. A small business owner who needs to open her shop as soon as possible to restart cash flow.
1. A local elected government official, who needs to generate damage assessments and rebuilding recommendations quickly.

By combining cloud-native infrastructure with event-driven data processing and intelligent modeling, this solution could help predict when and where a disaster may strike next and extrapolate the impact. Furthermore, it could allow stakeholders to derive the most promising course of action with the greatest improvement to plans and processes possible.

## Diagrams

![Challenge 3 Architecture](/images/Challenge_3_Architecture.png)

This solution starter idea combines machine learning and location services with real-time information to get users the information they need to take action quickly.

1. The user launches the mobile app and can access information across multiple services.
1. The use can ask questions to Watson Assistant and get answers to flood planning and recovery related questions.
1. The user can access recommendations on flood preparation checklists and best practices with Watson Machine Learning.
1. The user receives real-time weather updates from The Weather Company.
1. The user can obtain geolocation data for safety points and plot evacuation routes using HERE Location Services.

## Documents

- [Terminology on disaster risk reduction](https://www.unisdr.org/we/inform/terminology)
- [Using global indicators to measure progress](https://www.unisdr.org/files/54970_techguidancefdigitalhr.pdf)
- [Words into Action guidelines: Enhancing disaster preparedness for effective response](https://www.preventionweb.net/publications/view/53347)
- [Health care challenges during and after a natural disaster](https://developer.ibm.com/callforcode/blogs/health-care-challenges-during-and-after-a-natural-disaster)
- [IBM Code and Response: COVID-19](https://developer.ibm.com/podcasts/ibm_developer_podcast/015-john-walicki-code-and-response-covid-19/)

## Datasets

- [Malawi Spatial Data Platform (MASDAP)](http://www.masdap.mw/)
- [Land Usage from MASDAP](http://www.masdap.mw/layers/osm:osm_landusages)
- [Malawi Disaster & Risk Profile](https://www.preventionweb.net/countries/mwi/data/)
- [Disparities in Cellphone Ownership Pose Challenges in Africa](https://news.gallup.com/poll/189269/disparities-cellphone-ownership-pose-challenges-africa.aspx)
- [Data.gov disaster datasets](https://catalog.data.gov/dataset?q=disaster)


## Technology

- [Generate insights from multiple data sources](https://developer.ibm.com/patterns/generate-insights-from-multiple-data-sources-using-watson-studio/)
- [Transform and load big data CSV files into a database](https://developer.ibm.com/patterns/transform-load-big-data-csv-files-db2-zos-database/)
- [2018 Finalist PD3R](https://developer.ibm.com/blogs/call-for-code-finalist-pd3r-uses-artificial-intelligence-for-retrofitting/)
- [Create domain-specific bots using an agent bot](https://developer.ibm.com/patterns/compose-bots-using-an-agent-bot/)
- [Automate post-disaster checks using drone imagery](https://developer.ibm.com/technologies/iot/patterns/automate-post-disaster-checks-and-foster-offline-communication)
- [Configuring mesh networking for the IoT](https://developer.ibm.com/technologies/iot/tutorials/create-iot-mesh-network)
- [Build and deploy a disaster donations website with end-to-end encryption](https://developer.ibm.com/technologies/systems/patterns/systems-create-a-secure-disaster-donations-website)
- [Build a chatbot for your mobile app](https://developer.ibm.com/patterns/building-a-chatbot-with-kubernetes-watson-assistant-and-elastic-search/)
- [Rapid development of a scalable mobile application](https://developer.ibm.com/videos/demo-of-ibm-developer-mobile-app/)
- [Integrate interactive maps and location features into your application](https://developer.here.com/documentation/)

## Getting started

### Prerequisite

- Register for an [IBM Cloud](https://cloud.ibm.com/login) account
- Install and configure [IBM Cloud CLI](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#overview)
- Register for a [HERE](https://developer.here.com/sign-up) account
- Install [Node.js](https://nodejs.org/en/)
- Install [React Native CLI dependencies](https://reactnative.dev/docs/getting-started.html)
- Clone the [repository](https://github.com/Call-for-Code/Solution-Starter-Kit-Disasters-2020)

### Steps

1. [Set up an instance of Watson Assistant](#1.-set-up-an-instance-of-watson-assistant)
1. [Generate an API Key from the HERE Developer Portal](#2.-generate-an-api-key-from-the-here-developer-portal)
1. [Run the server](#3.-run-the-server)
1. [Run the mobile application](#4.-run-the-mobile-application)

### 1. Set up an instance of Watson Assistant

Log into the IBM Cloud and provision a Watson Assistant instance.

1. Create a **Watson Assistant** instance from the [IBM Cloud catalog](https://cloud.ibm.com/catalog/services/watson-assistant).
1. [Import into Watson Assistant](https://cloud.ibm.com/docs/assistant?topic=assistant-skill-dialog-add) the dialog skill (i.e., `flood.json`)
1. Open the assistant settings and click **API Details** and take note of the service credentials and the assistant ID

### 2. Generate an API Key from the HERE Developer Portal

The application makes use of the HERE Location Services for maps, searching, and routing. To access these services an API Key is required. Follow the instructions outlined in the HERE Developer Portal to [generate an API Key](https://developer.here.com/documentation/authentication/dev_guide/topics/api-key-credentials.html).

### 3. Run the server

1. Go into the `starter-kit/server-app` directory of the cloned repo
1. Copy the `.env.example` file and create a file called `.env`
1. Edit the `.env` file and update the `ASSISTANT_URL`, `ASSISTANT_ID`, and `ASSISTANT_IAM_APIKEY` for the Watson Assistant
1. Edit the value of **name** in `manifest.yml` to your desired application name (e.g., _my-app-name_)
1. From a terminal run  
    1. Change to the `starter-kit/server-app` directory of the cloned repo
    1. Install the dependencies: `npm install`
1. Launch the server application locally or deploy to IBM Cloud:
    - To run locally:
        1. Start the application: `npm start`
        1. The server can be accessed at http://localhost:3000
    - To deploy to IBM Cloud:
        1. Log in to your IBM Cloud account: `ibmcloud login`
        1. Target a Cloud Foundry org and space: `ibmcloud target --cf`
        1. Push the app to IBM Cloud: `ibmcloud app push`
        1. The server can be accessed at your app name URL: https://my-app-name

### 4. Run the mobile application

To configure and launch the mobile application:

1. Edit the `here-credentials.js` and update the API Key for HERE.
1. From a terminal run
    1. Change to the `SolutionStarterKitDisastersApp` directory
    1. Install dependencies: `npm install @react-navigation/native`
    1. Launch the app in an OS/Platform specific simulator. For example, for the iPhone (which requires Mac OS X & Xcode): `npm run ios`

## Resources

- [IBM Cloud](https://www.ibm.com/cloud)
- [Watson Assistant](https://cloud.ibm.com/docs/assistant?topic=assistant-getting-started)
- [HERE Location Services](https://developer.here.com/documentation)
- [React Navigation](https://reactnavigation.org/)

## License

This solution starter is made available under the [Apache 2 License](LICENSE).
