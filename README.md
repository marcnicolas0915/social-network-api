## ✨Social-Network-API✨

## Description 
This is a backend that can be used for a social media application. There is no UI for this project since it is only a server, using Insomnia the user can check the routes and data can be accessed and altered. 

## Installation 
1. Download or clone the repository
2. `npm i` in terminal to download the dependencies
3. `node index` to run the application
4. Connect to the database and test the routes using Insomnia

## Demo
[Users-Demo.webm](https://user-images.githubusercontent.com/117967802/219394142-0aa477fa-a24f-4b64-9ac8-964572cef001.webm)





[thoughts-demo.webm](https://user-images.githubusercontent.com/117967802/219394167-aec3b7c9-5f36-4afc-acb7-a90e9b6563df.webm)





[reaction-demo.webm](https://user-images.githubusercontent.com/117967802/219394189-4c929a63-c6ed-49e6-aabc-4090bbdea5f6.webm)





[friend-demo.webm](https://user-images.githubusercontent.com/117967802/219394208-4a67d6e6-0f37-4a6b-be68-bffdf41bf5a8.webm)








## User Story
AS A social media startup

I WANT an API for my social network that uses a NoSQL database

SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria

GIVEN a social network API

WHEN I enter the command to invoke the application

THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia for users and thoughts

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia

THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia

THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
