
# Hooked on Books
A single page application, which services blog based environment for sharing books and opinions about different authors and genres.


## 


## FAQ

#### What is it for ?
It's a place where you can share your opinion on different type of books, authors,genres. You can browse through a lot of great titles and add your favorite ones. Hooked on books is great place for finding new and exiting adventures in the amazing world of books.


#### How does it work?

The front end is built with react.For styling its used plain css. All of the request are handled by the REST-api based server build with node.js and express .The data is stored in mongoDb data base.


## API Reference

#### Get all books

```http
  GET  /books
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get book details

```http
  GET /books/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

```http
  Post /create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ownerId`      | `string` | **Required**. onwerId for valid request |

```http
  Post /books/{id}/like
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `string` | **Required**. userId for valid request |



## Deployment

To deploy this project run

```bash
  open the BOOK folder and run npm start
```

```bash
  open the SERVER folder and run npm start
```


## Features

- Like/Save books
- Profile sharing
- Adding and editing books content
- Fullscreen mode
- Different browser support


## Tech Stack

**Client:** React,CSS,HTML

**Server:** Node, Express


## Authors

- [@Martinkosta](https://www.github.com/martinkosta)

