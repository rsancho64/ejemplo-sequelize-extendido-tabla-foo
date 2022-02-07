
# Introducción
Con el objetivo de desarrollar un backend con microservicios, en este repositorio estaremos viendo un ejemplo de cómo implementar: Node JS, Express y MySQL con Sequelize.

Para ello vamos a seguir las instrucciones de cómo crear nuestro backend utilizando el siguiente [Post en Medium](https://tomasmalio.medium.com/node-js-express-y-mysql-con-sequelize-ec0a7c0ae292).

Una vez que lo tenemos creado únicamente queda comenzarlo y empezar a probar los microservicios. Para iniciar este proyecto:

1) **npm install**
2) **npm start**

¡Que comience el show!

# Users API Services
## Create User

* **URL**

  http://localhost:8000/api/usuarios/create/username/:username/status/:status

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `username=[String]`
   `status=[Integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
  * **Content:** 
    ```json
    { 
        "id": 1, 
        "username": "tomasmalio", 
        "status": "1",
        "createdAt": "2020-10-09T23:42:44.000Z",
        "updatedAt": "2020-10-09T23:42:44.000Z"
    }
    ```

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
  * **Content:** `Cannot POST`

## List User

* **URL**

  http://localhost:8000/api/usuarios/list/status/:status

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `status=[Integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
  * **Content:** 
    ```json
    [
        { 
            "id": 1, 
            "username": "tomasmalio",
            "status": "1"
        }
    ]
    ```

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
  * **Content:** `Cannot ERROR`

## Find User

* **URL**

  http://localhost:8000/api/usuarios/find/username/:username

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
    `username=[String]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
  * **Content:** 
    ```json
    {
        "id": 1,
        "username": "tomasmalio",
        "status": "1",
        "createdAt": "2020-10-09T23:42:44.000Z",
        "updatedAt": "2020-10-09T23:42:44.000Z"
    }
    ```

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
  * **Content:** `Cannot ERROR`

## Update User

* **URL**

  http://localhost:8000/api/usuarios/updateuser

* **Method:**

  `POST`
  
*  **Data Params**

   **Required:**
 
   ```json
    {
        "username": "[String]",
        "new_username": "[String]"
    }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    [
        1
    ]
    

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `Cannot ERROR`

# Games API Services

## Create Game

* **URL**

  http://localhost:8000/api/juegos/create

* **Method:**

  `POST`

* **Data Params**: JSON

   ```json
   {
       "name": "[String]",
       "description": "[String]",
       "status": "[Integer]"
   }

* **Success Response:**

  * **Code:** 200 <br />
  * **Content:** 
    ```json
    {
        "id": 1,
        "name": "Pacman",
        "description": "Mi juego preferido",
        "status": "1",
        "createdAt": "2020-10-09T23:52:26.000Z",
        "updatedAt": "2020-10-09T23:52:26.000Z"
    }

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
  * **Content:** `Cannot ERROR`

## List Games

* **URL**

  http://localhost:8000/api/juegos/list

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
    None

* **Data Params**:

   None

* **Success Response:**

  * **Code:** 200 <br />
  * **Content:** 
    ```json
    [
        {
            "id": 1,
            "name": "Pacman",
            "description": "Mi juego preferido",
            "status": "1",
            "createdAt": "2020-10-09T23:52:26.000Z",
            "updatedAt": "2020-10-09T23:52:26.000Z"
        }
    ]

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
  * **Content:** `Cannot ERROR`

## Find Game

* **URL**

  http://localhost:8000/api/juegos/find

* **Method:**

  `GET`

* **Data Params**: JSON

  ```json
  {
      "name": "[String]"
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />
  * **Content:** 
    ```json
    {
        "id": 1,
        "name": "Pacman",
        "description": "Mi juego preferido",
        "status": "1",
        "createdAt": "2020-10-09T23:52:26.000Z",
        "updatedAt": "2020-10-09T23:52:26.000Z"
    }

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
  * **Content:** `Cannot ERROR`

# Participants API Services

## Create Participant

* **URL**

  http://localhost:8000/api/participaciones/create

* **Method:**

  `POST`

* **Data Params**: JSON

   ```json
   {
       "user": "[String]",
       "game": "[String]",
       "status": "[Integer]"
   }
   ```

   OR

   ```json
   {
       "user": "[Integer]",
       "game": "[String]",
       "status": "[Integer]"
   }
   ```

    OR

   ```json
   {
       "user": "[String]",
       "game": "[Integer]",
       "status": "[Integer]"
   }
   ```

* **Success Response:**

  * **Code:** 200 <br />
  * **Content:** 
    ```json
    {
        "id": 1,
        "jugador_id": 1,
        "juego_id": 1,
        "status": "1",
        "updatedAt": "2021-05-28T10:05:56.770Z",
        "createdAt": "2021-05-28T10:05:56.770Z"
    }

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
  * **Content:** `Cannot ERROR`

## List Games

* **URL**

  http://localhost:8000/api/participaciones/list

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
    None

* **Data Params**:

   None

* **Success Response:**

  * **Code:** 200 <br />
  * **Content:** 
    ```json
    [
        {
            "status": "1",
            "usuario": {
                "id": 1,
                "username": "tomasmalio"
            },
            "juego": {
                "id": 1,
                "name": "Pacman",
                "description": "Mi juego preferido"
            }
        },
    ]

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
  * **Content:** `Cannot ERROR`