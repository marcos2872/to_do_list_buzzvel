# to_do_list_buzzvel

The project consists of a list of tasks in which you add a task and within that task you have the possibility of adding sub-tasks and throughout the process in which the sub-tasks are being carried out the classification of the list changes between new, in progress and completed

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Prerequisites

- [NodeJs](https://nodejs.org/en)
- [Docker](https://www.docker.com/)

### Installing

Examples of how to start the project

With Docker, in the root of the project run the command below, the project will run on port 3000

    docker-compose up --build

to run without docker enter the to_do_list folder and follow the instructions in the readme

    cd to_do_list

## Deployment

- [front-end Vercel](https://to-do-list-buzzvel.vercel.app/)


## Comments

The project only consists of a front-end, the page does not have data persistence, the data is only temporarily saved in a global state, I preferred not to use localStorage to save the lists, if the person reloads the page the data will be lost.
In the future I will create a back-end to save each user's data.