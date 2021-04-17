# FancyTodo-Server

**Base URL**

http://localhost:3000

# Todos

## **_Register_**

Returns new user.

- **URL**

  /register

- **Method:**

  `POST`

- **URL Params**

  None

- **Data Params**

  **Required:**

  ```
    {
      email: req.body.email,
      password: req.body.password
    }
  ```

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**

    ```
    {
        "success": true,
        "data": {
            "id": <user id>,
            "email": <user email>
        }
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Content:**
    ```
    { errors : "SequelizeValidationError" }
    ```

  OR

  - **Code:** 500 <br />

- **Sample Call:**

  ```javascript
  $.ajax({
  	method: "POST",
  	url: `http://localhost:3000/register`,
  	data: {
  		email,
  		password,
  	},
  });
  ```

---

## **_Login_**

Returns new user.

- **URL**

  /login

- **Method:**

  `POST`

- **URL Params**

  None

- **Data Params**

  **Required:**

  ```
    {
      email: req.body.email,
      password: req.body.password
    }
  ```

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```
    {
        "success": true,
        "access_token": <user access_token>
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Content:**
    ```
    {
      "errors": [
          "Invalid email and password"
      ]
    }
    ```

  OR

  - **Code:** 500 <br />

- **Sample Call:**

  ```javascript
  $.ajax({
  	method: "POST",
  	url: `http://localhost:3000/login`,
  	data: {
  		email,
  		password,
  	},
  });
  ```

---

## **_Add_**

Returns new todo.

- **URL**

  /todos

- **Method:**

  `POST`

- **URL Params**

  None

- **Data Params**

  **Required:**

  ```
    {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date: req.body.due_date,
    }
  ```

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**

    ```
    {
      "sucess": true,
      "data": {
          "id": 1,
          "title": "<todo title>",
          "description": "<todo description>",
          "status": "<todo status>",
          "due_date": "<todo due_date>",
          "updatedAt": "2021-04-15T00:22:11.114Z",
          "createdAt": "2021-04-15T00:22:11.114Z",
          "UserId": <todo UserId>
      }
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Content:**
    ```
    { errors : "SequelizeValidationError" }
    ```

  OR

  - **Code:** 500 <br />

- **Sample Call:**

  ```javascript
  $.ajax({
  	method: "POST",
  	url: `http://localhost:3000/todos`,
  	headers: {
  		token: localStorage.getItem("token"),
  	},
  	data: {
  		title,
  		description,
  		status,
  		due_date,
  	},
  });
  ```

---

## **_Display All_**

Returns all todos.

- **URL**

  /todos

- **Method:**

  `GET`

- **URL Params**

None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```
    {
      "success": true
      data: [
        {
            "id": 1,
            "title": "<todo title>",
            "description": "<todo description>",
            "status": "<todo status>",
            "due_date": "<todo due_date>",
            "updatedAt": "2021-04-15T00:22:11.114Z",
            "createdAt": "2021-04-15T00:22:11.114Z",
            "UserId": <todo UserId>
        },
        {
            "id": 2,
            "title": "<todo title>",
            "description": "<todo description>",
            "status": "<todo status>",
            "due_date": "<todo due_date>",
            "updatedAt": "2021-04-17T00:22:11.114Z",
            "createdAt": "2021-04-17T00:22:11.114Z",
            "UserId": <todo UserId>
        }
      ]
    }
    ```

- **Error Response:**

  - **Code:** 500 <br />

- **Sample Call:**

  ```javascript
  $.ajax({
  	method: "GET",
  	url: "http://localhost:3000/todos",
  	headers: {
  		token: localStorage.getItem("token"),
  	},
  });
  ```

---

## **_Display One_**

Returns one todos.

- **URL**

  /todos/:id

- **Method:**

  `GET`

- **URL Params**

id

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```
    {
      "success": true,
      data: {
        "id": 1,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "updatedAt": "2021-04-15T00:22:11.114Z",
        "createdAt": "2021-04-15T00:22:11.114Z",
        "UserId": <todo UserId>
      }
    }
    ```

- **Error Response:**

  - **Code:** 404 <br />
    **Content:**
    ```
    {
      "errors": [
          "Task Not Found"
      ]
    }
    ```

  OR

  - **Code:** 500 <br />

- **Sample Call:**

  ```javascript
  $.ajax({
  	method: "GET",
  	url: "http://localhost:3000/todos/1",
  	headers: {
  		token: localStorage.getItem("token"),
  	},
  });
  ```

---

## **_Edit_**

Returns editted todo.

- **URL**

  /movies/:id

- **Method:**

  `PUT`

- **URL Params**

  id

- **Data Params**

  **Required:**

  ```
    {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date: req.body.due_date,
    }
  ```

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**
    ```
    {
      "success": true,
      "data": {
        "id": 1,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "updatedAt": "2021-04-15T00:22:11.114Z",
        "createdAt": "2021-04-15T00:22:11.114Z",
        "UserId": <todo UserId>
      }
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Content:**

    ```
    { error : "SequelizeValidationError" }
    ```

    OR

  - **Code:** 404 <br />
    **Content:**

    ```
    {
      "errors": [
          "Task Not Found"
      ]
    }
    ```

    OR

  - **Code:** 401 <br />
    **Content:**

    ```
    {
        "errors": [
            "Missing Access Token"
        ]
    }
    ```

    OR

  - **Code:** 401 <br />
    **Content:**

    ```
    {
        "errors": [
            "Invalid Token"
        ]
    }
    ```

    OR

  - **Code:** 500 <br />

- **Sample Call:**

  ```javascript
  $.ajax({
  	method: "PUT",
  	url: `http://localhost:3000/todos/1`,
  	headers: {
  		token: localStorage.getItem("token"),
  	},
  	data: {
  		title,
  		description,
  		status,
  		due_date,
  	},
  });
  ```

---

## **_Update Status_**

Returns editted todo.

- **URL**

  /movies/:id

- **Method:**

  `PATCH`

- **URL Params**

  id

- **Data Params**

  **Required:**

  ```
    {
      status: req.body.status
    }
  ```

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**
    ```
    {
      "success": true,
      "data": {
        "id": 1,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "updatedAt": "2021-04-15T00:22:11.114Z",
        "createdAt": "2021-04-15T00:22:11.114Z",
        "UserId: <todo UserId>
      }
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Content:**

    ```
    { error : "SequelizeValidationError" }
    ```

    OR

  - **Code:** 404 <br />
    **Content:**

    ```
    {
      "errors": [
          "Task Not Found"
      ]
    }
    ```

    OR

  - **Code:** 401 <br />
    **Content:**

    ```
    {
        "errors": [
            "Missing Access Token"
        ]
    }
    ```

    OR

  - **Code:** 401 <br />
    **Content:**

    ```
    {
        "errors": [
            "Invalid Token"
        ]
    }
    ```

    OR

  - **Code:** 500 <br />

- **Sample Call:**

  ```javascript
  $.ajax({
  	method: "PATCH",
  	url: `http://localhost:3000/todos/1`,
  	headers: {
  		token: localStorage.getItem("token"),
  	},
  	data: {
  		status,
  	},
  });
  ```

---

## **_Delete_**

Returns editted todo.

- **URL**

  /movies/:id

- **Method:**

  `DELETE`

- **URL Params**

  id

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```
    {
      "success": true
      "message": "Task deleted successfully"
    }
    ```

- **Error Response:**

  - **Code:** 404 <br />
    **Content:**

    ```
    {
      "errors": [
          "Task Not Found"
      ]
    }
    ```

  OR

  - **Code:** 401 <br />
    **Content:**

    ```
    {
        "errors": [
            "Missing Access Token"
        ]
    }
    ```

  OR

  - **Code:** 401 <br />
    **Content:**

    ```
    {
        "errors": [
            "Invalid Token"
        ]
    }
    ```

  OR

  - **Code:** 500 <br />

- **Sample Call:**

  ```javascript
  $.ajax({
  	method: "DELETE",
  	url: `http://localhost:3000/todos/1`,
  	headers: {
  		token: localStorage.getItem("token"),
  	},
  });
  ```
