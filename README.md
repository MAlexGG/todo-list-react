# 📝 Simple to-do list CRUD

## Table of Contents

1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)

---

## General Info

This is an educational exercise to understand how to do a simple CRUD with react.js using axios and json-server. We can create a task that we can read, edit and delete, all of them with UX validations. Also you can search a task that it's already created.

### UI Design

I was looking for a simple design imitating a notebook sheet.

![desktop_mobile_todo](https://user-images.githubusercontent.com/73828751/230768705-7dea3d3c-f137-4a32-802b-caa9b0fe14db.png)

## Technologies

It was developed with react.js, using styled components library for css, axios library for services and json-server for data persistence. It's responsive. Service are tested with mocked data with Mock Service Worker library.

## Installation

- Required React v.18.2.0
- Required Node v.18.15.0
- git clone <repository>
- npm install
- npm start
- Required json-server v.0.17.1
- npm i json-server
- npm run todo (for json-server)
- Required Mock Service Worker v.1.2.1 (for tests)
- npm install msw --save-dev
- npm run test
