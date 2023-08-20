#Video

- Video object

```
{
  _id: ObjectId()
  urlImageThumbnail: string
  created_at: datetime(iso 8601)
  updated_at: datetime(iso 8601)
}
```

## **GET api/v1/video/all**

Returns all video in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message: "Success retrieving data",
    data: [
        {<video_object>},
        {<video_object>},
        {<video_object>}
    ]
}
```

- **Error Response:**
  - **Code:** 500  
    **Content:** `{ message: error.message }`

## **GET api/v1/video/:id**

Returns video with specified id.

- **URL Params**  
  _Required:_ `id=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message: "Success retrieving data",
    data:{<video_object>}
}
```

- **Error Response:**
  - **Code:** 500  
    **Content:** `{ message: error.message }`

## **POST api/v1/video/create**

Returns created video in the system.

- **URL Params**  
  None
- **Data Params**

  ```
  {
      urlImageThumbnail: string
  }
  ```

- **Headers**
  Content-Type: application/json
- **Success Response:**
- **Code:** 201
  **Content:**

```
{
    message: "Video Posted",
    data: { <video_object> }
}
```

- **Error Response:**
  - **Code:** 500  
    **Content:** `{ message: error.message }`

## **PUT api/v1/video/update/:id**

Returns updated video with specified id.

- **URL Params**  
  _Required:_ `id=[string]`
- **Data Params**

  ```
  {
      urlImageThumbnail: string
  }
  ```

- **Headers**
  Content-Type: application/json
- **Success Response:**
- **Code:** 201
  **Content:**

```
{
    message: "Video Updated",
    data: { <video_object> }
}
```

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ message: "Video not found" }`  
    OR
  - **Code:** 500  
    **Content:** `{ message: error.message }`

## **GET api/v1/video/delete/:id**

Returns deleted video in the system.

- **URL Params**  
  _Required:_ `id=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message: "Video Deleted",
    data: {<video_object>}
}
```

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ message: "Video not found" }`  
    OR
  - **Code:** 500  
    **Content:** `{ message: error.message }`

</br>
#Product

- Product object

```
{
  _id: ObjectId(),
  productLink: string,
  title: string,
  price: number,
  videoId: string,
  created_at: datetime(iso 8601),
  updated_at: datetime(iso 8601),
}
```

## **GET api/v1/product/all**

Returns all product in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message: "Success retrieving data",
    data: [
        {<product_object>},
        {<product_object>},
        {<product_object>}
    ]
}
```

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ message: "Video not found" }`  
    OR
  - **Code:** 500  
    **Content:** `{ message: error.message }`

## **GET api/v1/product/all/:id**

Returns all product with specified videoId.

- **URL Params**  
  _Required:_ `id=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message: "Success retrieving data",
    data: [
        {<product_object>},
        {<product_object>},
        {<product_object>}
    ]
}
```

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ message: "Video not found" }`  
    OR
  - **Code:** 500  
    **Content:** `{ message: error.message }`

## **POST api/v1/product/create**

Returns created product in the system.

- **URL Params**  
  None
- **Data Params**

  ```
  {
    productLink: string,
    title: string,
    price: number,
  }
  ```

- **Headers**
  Content-Type: application/json
- **Success Response:**
- **Code:** 201
  **Content:**

```
{
    message: "Product Posted",
    data: { <product_object> }
}
```

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ message: "Video not found" }`  
    OR
  - **Code:** 500  
    **Content:** `{ message: error.message }`

## **PUT api/v1/product/update/:id**

Returns updated product with specified id.

- **URL Params**  
  _Required:_ `id=[string]`
- **Data Params**

  ```
  {
    productLink: string,
    title: string,
    price: number,
  }
  ```

- **Headers**
  Content-Type: application/json
- **Success Response:**
- **Code:** 200
  **Content:**

```
{
    message: "Product Updated",
    data: { <product_object> }
}
```

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ message: "Product not found" }`
    OR
  - **Code:** 500  
    **Content:** `{ message: error.message }`

## **GET api/v1/product/delete/:id**

Returns deleted product in the system.

- **URL Params**  
  _Required:_ `id=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message: "Product Deleted",
    data: { <product_object> }
}
```

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ message: "Video not found" }`  
    OR
  - **Code:** 500  
    **Content:** `{ message: error.message }`

</br>
#Comment

- Comment object

```
{
  _id: ObjectId(),
  username: string,
  comment: string,
  videoId: string,
  created_at: datetime(iso 8601),
  updated_at: datetime(iso 8601),
}
```

## **GET api/v1/comment/all/:id**

Returns all comment in the system.

- **URL Params**  
  _Required:_ `id=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message: "Success retrieving data",
    data: [
        {<comment_object>},
        {<comment_object>},
        {<comment_object>}
    ]
}
```

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ message: "Video not found" }`  
    OR
  - **Code:** 500  
    **Content:** `{ message: error.message }`

## **POST api/v1/comment/create/:id**

Returns created comment in the system.

- **URL Params**  
  _Required:_ `id=[string]`
- **Data Params**

  ```
  {
      username: string,
      comment: string,
      videoId: string
  }
  ```

- **Headers**
  Content-Type: application/json
- **Success Response:**
- **Code:** 201
  **Content:**

```
{
    message: "Comment Posted",
    data: { <comment_object> }
}
```

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ message: "Video not found" }`  
    OR
  - **Code:** 500  
    **Content:** `{ message: error.message }`

## **PUT api/v1/comment/update/:id**

Returns updated comment with specified id.

- **URL Params**  
  _Required:_ `id=[string]`
- **Data Params**

  ```
  {
      comment: string
  }
  ```

- **Headers**
  Content-Type: application/json
- **Success Response:**
- **Code:** 200
  **Content:**

```
{
    message: "Comment Updated",
    data: { <comment_object> }
}
```

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ message: "Comment not found" }`
    OR
  - **Code:** 500  
    **Content:** `{ message: error.message }`

## **GET api/v1/comment/delete/:id**

Returns deleted comment in the system.

- **URL Params**  
  _Required:_ `id=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message: "Comment Deleted",
    data: { <comment_object> }
}
```

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ message: "Comment not found" }`  
    OR
  - **Code:** 500  
    **Content:** `{ message: error.message }`
