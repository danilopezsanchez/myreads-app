# MyReads Project

Project forked from here https://github.com/udacity/nd0191-c1-myreads 

A bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## Instruction

To run the project:

- Positioning in starter folder
- install all project dependencies with `npm i`
- start the development server with `npm start`

## What You're Getting

```bash
├── README.md - This file.
└── starter
	├── package.json # npm package manager file.
	├── public
	│   ├── favicon.ico # React Icon
	│   └── index.html
	└── src
		├── App.css # Styles for your app. 
		├── App.js # This is the root of your app. 
		├── components #Folder of components
		│   ├── Book.js # Component to render a single book info
		│	├── ListBook.js # Component to render a list of books
		│	├── ListBookContainer.js # Component to render several list of books
		│   └── Searcher.js # Component using for search books
		├── App.test.js # Used for testing. Provided with Create React App. 
		├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
		├── images # Helpful images 
		│   └── cover.png
		├── icons # Helpful icons
		│   ├── add.svg
		│   ├── arrow-back.svg
		│   └── arrow-drop-down.svg
		├── index.css # Global styles.
		└── index.js # It is used for DOM rendering only.
	
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the following methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

