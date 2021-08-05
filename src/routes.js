import {
	addBookHandler,
	deleteBookByIdHandler,
	editBookByIdHandler,
	getBooksHandler,
	getBookByIdHandler
} from './handler.js';


const routes = [
	{
		method: 'POST',
		path: '/books',
		handler: addBookHandler
	},
	{
		method: 'GET',
		path: '/books',
		handler: getBooksHandler
	},
	{
		method: 'GET',
		path: '/books/{id}',
		handler: getBookByIdHandler
	},
	{
		method: 'PUT',
		path: '/books/{id}',
		handler: editBookByIdHandler
	},
	{
		method: 'DELETE',
		path: '/books/{id}',
		handler: deleteBookByIdHandler
	}
];

export default routes;