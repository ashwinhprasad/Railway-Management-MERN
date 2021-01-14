# Railway Mangement System - MERN and Redux

<img src="https://images.hdqwalls.com/wallpapers/train-mountains-illustration-minimalistic-9l.jpg" title="Railway Art" alt="Image Not Available" data-align="center">

## Description

This Repository Contains the Implementation of Railway Management System Built with MERN. Railway Management System is an application built for users to book trains and administrators to run and manage trains.

## Functionalities

```mermaid
flowchart BT;
    subgraph Functionalities
        Book[Book Train]
        cancel[Cancel Booking]
        create[create Train]
        delete[Delete Train]
    end
    subgraph user and auth
        signup
        auth[login / logout]
    end

    subgraph actors
        user
        admin
    end
    user --> Book
    user --> cancel
    admin --> Book
    admin --> cancel
    admin --> create
    admin --> delete
    admin --> signup
    admin --> auth
    user --> signup
    user --> auth
```

- **End User :** Can **Create/Delete** and **Login/Logout** of account and **Book/Cancel** Trains

- **Admin User :** All the powers of the End user and can also **Create / Remove / Update / Get Details of** Trains

## Tech Stack

- **React** - Frontend

- **Express** - Backend/API

- **MongoDB** - Database

- **Redux** - State Management

- **Node** - Runtime

- **Mongoose** - ORM for Database

- **Other Additional Applications Include :**

  - Postman - for API Testing

  - ROBO3T - Mongo Visualizer

# Thank You
