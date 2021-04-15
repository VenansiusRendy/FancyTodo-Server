# FancyTodo-Server

**Base URL**

http://localhost:3000

# Todos

***Add***
----
  Returns new todo.

* **URL**

  /movies

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

   **Required:**
  ````
    {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date: req.body.due_date,
    }
  ````

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
        "id": 1,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "updatedAt": "2021-04-15T00:22:11.114Z",
        "createdAt": "2021-04-15T00:22:11.114Z"
    }
    ```


* **Error Response:**

  * **Code:** 400 <br />
    **Content:** 
    ```
    { error : "SequelizeValidationError" }
    ```

  OR

  * **Code:** 500 <br />

* **Sample Call:**

  ```javascript
    $.ajax({
      method: 'POST',
      url: `http://localhost:3000/todos`,
      headers: {
        token: localStorage.getItem('token')
      },
      data: {
        title, description, status, due_date
      }
    })
  ```

----
***Display All***
----
  Returns all todos.

* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
      {
          "id": 1,
          "title": "<todo title>",
          "description": "<todo description>",
          "status": "<todo status>",
          "due_date": "<todo due_date>",
          "updatedAt": "2021-04-15T00:22:11.114Z",
          "createdAt": "2021-04-15T00:22:11.114Z"
      },
      {
          "id": 2,
          "title": "<todo title>",
          "description": "<todo description>",
          "status": "<todo status>",
          "due_date": "<todo due_date>",
          "updatedAt": "2021-04-17T00:22:11.114Z",
          "createdAt": "2021-04-17T00:22:11.114Z"
      }
    ]
    ```


* **Error Response:**

  * **Code:** 500 <br />


* **Sample Call:**

  ```javascript
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/todos',
    headers: {
      token: localStorage.getItem('token')
    }
  })
  
  ```
----
***Display One***
----
  Returns one todos.

* **URL**

  /todos/:id

* **Method:**

  `GET`
  
*  **URL Params**

  id

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "id": 1,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "updatedAt": "2021-04-15T00:22:11.114Z",
        "createdAt": "2021-04-15T00:22:11.114Z"
    }
    ```


* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
    ```
    { message : "Error not found" }
    ```

  OR  

  * **Code:** 500 <br />


* **Sample Call:**

  ```javascript
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/todos/1',
    headers: {
      token: localStorage.getItem('token')
    }
  })
  
  ```
----
***Edit***
----
  Returns editted todo.

* **URL**

  /movies/:id

* **Method:**

  `PUT`
  
*  **URL Params**

    id

* **Data Params**

   **Required:**
  ````
    {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date: req.body.due_date,
    }
  ````

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
        "id": 1,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "updatedAt": "2021-04-15T00:22:11.114Z",
        "createdAt": "2021-04-15T00:22:11.114Z"
    }
    ```


* **Error Response:**

  * **Code:** 400 <br />
    **Content:** 
    ```
    { error : "SequelizeValidationError" }
    ```
  OR
    * **Code:** 404 <br />
    **Content:** 
    ```
    { message : "Error not found" }
    ```
  OR

  * **Code:** 500 <br />

* **Sample Call:**

  ```javascript
    $.ajax({
      method: 'PUT',
      url: `http://localhost:3000/todos/1`,
      headers: {
        token: localStorage.getItem('token')
      },
      data: {
        title, description, status, due_date
      }
    })
  ```
----
***Update Status***
----
  Returns editted todo.

* **URL**

  /movies/:id

* **Method:**

  `PATCH`
  
*  **URL Params**

    id

* **Data Params**

   **Required:**
  ````
    {
      status: req.body.status
    }
  ````

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
        "id": 1,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "updatedAt": "2021-04-15T00:22:11.114Z",
        "createdAt": "2021-04-15T00:22:11.114Z"
    }
    ```


* **Error Response:**

  * **Code:** 400 <br />
    **Content:** 
    ```
    { error : "SequelizeValidationError" }
    ```
  OR
    * **Code:** 404 <br />
    **Content:** 
    ```
    { message : "Error not found" }
    ```
  OR

  * **Code:** 500 <br />

* **Sample Call:**

  ```javascript
    $.ajax({
      method: 'PATCH',
      url: `http://localhost:3000/todos/1`,
      headers: {
        token: localStorage.getItem('token')
      },
      data: {
        status
      }
    })
  ```
----
***Delete***
----
  Returns editted todo.

* **URL**

  /movies/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

    id

* **Data Params**
    
    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      "message": "todo success to delete"
    }
    ```


* **Error Response:**

    * **Code:** 404 <br />
    **Content:** 
    ```
    { message : "Error not found" }
    ```
  OR

  * **Code:** 500 <br />

* **Sample Call:**

  ```javascript
    $.ajax({
      method: 'DELETE',
      url: `http://localhost:3000/todos/1`,
      headers: {
        token: localStorage.getItem('token')
      }
    })
  ```