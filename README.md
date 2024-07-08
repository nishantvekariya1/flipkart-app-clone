# Flipkart Clone

This project is a Flipkart clone built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It mimics the functionalities of an ecommerce platform, including user authentication, product listing, shopping cart, and order management.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)

## Demo

![Demo Screenshot](https://github.com/nishantvekariya1/flipkart-app-clone/blob/master/Screenshots/1.png)
![Demo Screenshot](https://github.com/nishantvekariya1/flipkart-app-clone/blob/master/Screenshots/2.png)

## Features

- User authentication (signup, login, logout)
- Product browsing with search functionality
- Product details with reviews and ratings
- Shopping cart management
- Order placement and history

## Technologies Used

- **MongoDB**: NoSQL database for storing user data and products
- **Express.js**: Web application framework for Node.js
- **React.js**: Frontend library for building user interfaces
- **Node.js**: JavaScript runtime for server-side development
- **Mongoose**: ODM for MongoDB
- **JWT**: JSON Web Tokens for authentication

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/nishantvekariya1/flipkart-app-clone
    ```

2. Install the dependencies for both the client and server:
    ```bash
    # In the server directory
    cd server
    npm install

    # In the client directory
    cd client
    npm install
    ```

3. Create a `.env` file in the server directory and add the following environment variables:
    ```env
    DB_USERNAME=your_db_name
    DB_PASSWORD=your_db_password
    PAYTM_MID=your_paytm_mid
    PAYTM_WEBSITE=your_paytm_website
    PAYTM_CHANNEL_ID=your_paytm_id
    PAYTM_INDUSTRY_TYPE_ID=your_paytm_industry_type
    PAYTM_CUST_ID=your_paytm_cust_id
    PAYTM_MERCHANT_KEY=your_paytm_merchant_key
    ```

4. Start the development servers:
    ```bash
    # In the server directory
    cd server
    npm run start

    # In the client directory
    cd client
    npm run start
    ```

5. Open your browser and navigate to `http://localhost:3000` to view the Flipkart clone website.
