# Strapi backend application

---

## General information

This is a strapi backend application, that is related to the Integrated Circuit Shop.
That application enable to create orders, products and other basic things related to shop topic.

Published application has created:

- 5 Collection types: Order, Product, Regular Customer, Shipping, User
- 2 created Orders
- 5 created Products
- 2 created Regular Customers
- 4 created Shippings
- 3 created Users
- 3 created Roles for users

---

## Getting started

Run that application in production mode with this command:

```
npm start
```

Run that application in development mode with this command:

```
npm run develop
```

At the login page, enter that credentials to interact with application as SuperAdmin user:

```
Email: admin@gmail.com
Password: Admin123!
```

---

## Created content

### Collection types

1. Order
   <img src="https://github.com/touunix/Boologic/assets/79804729/ac5f3c56-c143-429b-b63b-766c29c8aef8" width="90%"></img>
2. Product
   <img src="https://github.com/touunix/Boologic/assets/79804729/67bc2851-2c24-4d77-89ac-74893137b810" width="90%"></img>
3. Regular Customer
   <img src="https://github.com/touunix/Boologic/assets/79804729/3ac5aa35-df8c-452f-b85d-0e673ec5b2dd" width="90%"></img>
4. Shipping
   <img src="https://github.com/touunix/Boologic/assets/79804729/0fcee0fa-69b2-4029-809b-c2b427580fb1" width="90%"></img>
5. User
   <img src="https://github.com/touunix/Boologic/assets/79804729/0088dfd6-65e3-4838-bf7f-099fc7a1d6cb" width="90%"></img>

### Orders

1. AMD Order
   <img src="https://github.com/touunix/Boologic/assets/79804729/bcac9c79-8988-464c-8206-96c14e82c3f5" width="90%"></img>
2. Intel Order
   <img src="https://github.com/touunix/Boologic/assets/79804729/de83223d-070f-4981-b78d-4c0be333d88d" width="90%"></img>

### Products

1.  Integrated circuit MAX8556ETE+T
    <img src="https://github.com/touunix/Boologic/assets/79804729/142940fd-eaa1-4cb4-b75a-08df2d0a805c" width="90%"></img>
2.  Integrated circuit ADA4091-2ARZ
    <img src="https://github.com/touunix/Boologic/assets/79804729/56b0db1f-0612-4108-a898-973b3e4284d1" width="90%"></img>
3.  Integrated circuit LT6100IMS8#PBF
    <img src="https://github.com/touunix/Boologic/assets/79804729/f0607759-dd4a-421e-bfd7-75fc348c291e" width="90%"></img>
4.  Integrated circuit TLE8104EXUMA2
    <img src="https://github.com/touunix/Boologic/assets/79804729/b2a209f5-79a8-4f6e-ada7-59c17f83f504" width="90%"></img>
5.  Integrated circuit LT1633CS#PBF
    <img src="https://github.com/touunix/Boologic/assets/79804729/6284a1de-d218-4064-aff3-0faa8c7ff9c6" width="90%"></img>

### Regular Customers

1. Intel
   <img src="https://github.com/touunix/Boologic/assets/79804729/d1be6132-0d75-486d-ad9a-df69f3331741" width="90%"></img>
2. AMD
   <img src="https://github.com/touunix/Boologic/assets/79804729/a02ee771-09a1-4315-a007-5510d94f6530" width="90%"></img>

### Shippings

1. Personal Collection
   <img src="https://github.com/touunix/Boologic/assets/79804729/4dc8233a-482d-4007-b4e3-1df8778fc8a2" width="90%"></img>
2. InPost Parcel Machine
   <img src="https://github.com/touunix/Boologic/assets/79804729/bd22d5e6-6d62-4df7-a11c-194c7f58c68e" width="90%"></img>
3. Orlen Parcel Machine
   <img src="https://github.com/touunix/Boologic/assets/79804729/364b93b6-4114-43f2-b36d-89ca4775ac02" width="90%"></img>
4. InPost Courier
   <img src="https://github.com/touunix/Boologic/assets/79804729/e105c0f1-1a71-45b3-98ca-8fd0525a5954" width="90%"></img>

### Users

1. AMD
   <img src="https://github.com/touunix/Boologic/assets/79804729/fe7c82af-9e0e-4fb1-9bf0-48ebbd6ceaa5" width="90%"></img>
2. John Smith
   <img src="https://github.com/touunix/Boologic/assets/79804729/1941329b-7754-4da2-9953-39f8f1a348bf" width="90%"></img>
3. Boss
   <img src="https://github.com/touunix/Boologic/assets/79804729/434a8294-ace7-4b0b-9fc5-7c4fe338c4cf" width="90%"></img>

### Roles for users

1. Customer -> role to enable customers to view products and create orders.
2. Company worker -> role for regular worker to enable basic actions of products category.
3. Shop Manager -> role for Shop Manager to enable all actions related to content types.

---

## How to Interact

Example with using `Postman` software.

1. Login with a indentifier and password.

### AMD user

- Enter the URL in the proper box, choose **POST** method:

```
http://localhost:1337/api/auth/local
```

- In the body section, enter that JSON structure:

```
{
    "identifier": "amd@amd.com",
    "password": "AMD123"
}
```

- Click the `Send` button

All those actions will guarantee that you will log in. On the output, there will be an authorized token, which will be needed to perform actions with the application. Save that token for later actions.

- Example message:

  ```
  {
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "user": {
        "id": 2,
        "username": "AMD",
        "email": "amd@amd.com",
        "provider": "local",
        "confirmed": true,
        "blocked": false,
        "createdAt": "2024-04-20T11:51:46.323Z",
        "updatedAt": "2024-04-20T19:37:40.602Z"
    }
  }
  ```

### John Smith User

- Enter the URL in the proper box, choose **POST** method:

```
http://localhost:1337/api/auth/local
```

- In the body section, enter that JSON structure:

```
{
    "identifier": "john.smith@shop.com",
    "password": "JOHN123"
}
```

- Click the `Send` button

All those actions will guarantee that you will log in. On the output, there will be an authorized token, which will be needed to perform actions with the application. Save that token for later actions.

- Example message:

  ```
  {
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "user": {
        "id": 3,
        "username": "John Smith",
        "email": "john.smith@shop.com",
        "provider": "local",
        "confirmed": true,
        "blocked": false,
        "createdAt": "2024-04-20T19:45:31.696Z",
        "updatedAt": "2024-04-21T13:47:02.772Z"
    }
  }
  ```

### Boss User

- Enter the URL in the proper box, choose **POST** method:

```
http://localhost:1337/api/auth/local
```

- In the body section, enter that JSON structure:

```
{
    "identifier": "boss@shop.com",
    "password": "BOSSS123"
}
```

- Click the `Send` button

All those actions will guarantee that you will log in. On the output, there will be an authorized token, which will be needed to perform actions with the application. Save that token for later actions.

- Example message:

  ```
  {
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "user": {
        "id": 4,
        "username": "Boss",
        "email": "boss@shop.com",
        "provider": "local",
        "confirmed": true,
        "blocked": false,
        "createdAt": "2024-04-20T19:51:42.236Z",
        "updatedAt": "2024-04-21T13:48:28.105Z"
    }
  }
  ```

## Example actions for user

### AMD user

Mentioned user has assigned role `Customer`, so that user can perform actions like:

- create order -> `POST /api/orders`
- find product by ID -> `GET /api/products/:id`
- find all products -> `GET /api/products`

With saved authorization token from logging stage do following actions:

- In the Authorization section, select `Type` Bearer Token and enter `Token` generated at the login action

- Enter the URL in the proper box, choose **GET** method:

```
http://localhost:1337/api/products
```

- Click the `Send` button.

- It will print on the output that example structure:

```
{
    "data": [
        {
            "id": 1,
            "attributes": {
                "Name": "Integrated circuit TLE8104EXUMA2",
                "Manufacturer": "Infineon",
                "Internal_ID": "IC000450",
                "Available": true,
                "Manufacturer_code": "TLE8104EXUMA2",
                "Price": 25,
                "Mounting_type": "SMD",
                "Case": "SOIC-20",
                "Category": "Power switches - Power distribution",
                "createdAt": "2024-04-15T18:07:53.720Z",
                "updatedAt": "2024-04-20T20:21:37.959Z",
                "locale": "en",
                "Description": null,
                "Available_Quantity": 5
            }
        },
        {
            "id": 2,
            "attributes": {
                "Name": "Integrated circuit ADA4091-2ARZ",
                "Manufacturer": "Analog Devices",
                "Internal_ID": "IC000440",
                "Available": true,
                "Manufacturer_code": "ADA4091-2ARZ",
                "Price": 30,
                "Mounting_type": "SMD",
                "Case": "SOIC-8",
                "Category": "Measuring amplifier",
                "createdAt": "2024-04-20T10:12:48.424Z",
                "updatedAt": "2024-04-20T20:21:24.360Z",
                "locale": "en",
                "Description": null,
                "Available_Quantity": 2
            }
        },
        {
            "id": 3,
            "attributes": {
                "Name": "Integrated circuit LT6100IMS8#PBF",
                "Manufacturer": "Analog Devices",
                "Internal_ID": "IC000445",
                "Available": true,
                "Manufacturer_code": "LT6100IMS8#PBF",
                "Price": 20,
                "Mounting_type": "SMD",
                "Case": "MSOP-8",
                "Category": "Measuring amplifier",
                "createdAt": "2024-04-20T10:21:21.920Z",
                "updatedAt": "2024-04-20T20:21:30.576Z",
                "locale": "en",
                "Description": null,
                "Available_Quantity": 25
            }
        },
        {
            "id": 4,
            "attributes": {
                "Name": "Integrated circuit MAX8556ETE+T",
                "Manufacturer": "Maxim",
                "Internal_ID": "IC000003",
                "Available": true,
                "Manufacturer_code": "MAX8556ETE+T",
                "Price": 45,
                "Mounting_type": "SMD",
                "Case": "TQFN-16",
                "Category": "LDO voltage regulators",
                "createdAt": "2024-04-20T10:22:31.222Z",
                "updatedAt": "2024-04-20T20:21:19.677Z",
                "locale": "en",
                "Description": null,
                "Available_Quantity": 6
            }
        },
        {
            "id": 5,
            "attributes": {
                "Name": "Integrated circuit LT1633CS#PBF",
                "Manufacturer": "Analog Devices",
                "Internal_ID": "IC000465",
                "Available": true,
                "Manufacturer_code": "LT1633CS#PBF",
                "Price": 75,
                "Mounting_type": "SMD",
                "Case": "SOIC-14",
                "Category": "Operational amplifier",
                "createdAt": "2024-04-20T10:23:47.697Z",
                "updatedAt": "2024-04-20T20:21:43.322Z",
                "locale": "en",
                "Description": null,
                "Available_Quantity": 78
            }
        }
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "pageSize": 25,
            "pageCount": 1,
            "total": 5
        }
    }
}
```

### John Smith user

Mentioned user has assigned role `Company worker`, so that user can perform actions like:

- create product -> `POST /api/products`
- delete product -> `DELETE /api/products/:id`
- find product by ID -> `GET /api/products/:id`
- find all products -> `GET /api/products`
- update product information -> `PUT /api/products/:id`

### Boss user

Mentioned user has assigned role `Shop Manager`, so that user can perform actions like:

- create order -> `POST /api/orders`
- delete order -> `DELETE /api/orders/:id`
- find order by ID -> `GET /api/orders/:id`
- find all orders -> `GET /api/orders`
- update order information -> `PUT /api/orders/:id`

---

- create product -> `POST /api/products`
- delete product -> `DELETE /api/products/:id`
- find product by ID -> `GET /api/products/:id`
- find all products -> `GET /api/products`
- update product information -> `PUT /api/products/:id`

---

- create regular-customer -> `POST /api/regular-customers`
- delete regular-customer -> `DELETE /api/regular-customers/:id`
- find regular-customer by ID -> `GET /api/regular-customers/:id`
- find all regular-customers -> `GET /api/regular-customers`
- update regular-customer information -> `PUT /api/regular-customers/:id`

---

- create shipping -> `POST /api/shippings`
- delete shipping -> `DELETE /api/shippings/:id`
- find shipping by ID -> `GET /api/shippings/:id`
- find all shippings -> `GET /api/shippings`
- update shipping information -> `PUT /api/shippings/:id`

---

## More information

For more details you can contact with **gdx167822@student.gdansk.merito.pl** or **touunix@gmail.com**
