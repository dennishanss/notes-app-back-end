/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
const { addNoteHandler } = require('./handler');
const { getAllNotesHandler } = require('./handler');
const { getNoteByIdHandler } = require('./handler');
const { editNoteByIdHandler } = require('./handler');
const { deleteNoteByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },

  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },

];
   
module.exports = routes;