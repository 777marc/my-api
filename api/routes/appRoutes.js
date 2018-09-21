'use strict';
module.exports = function(app) {
  var notes = require('../controllers/notesController');
 
  app.route('/notes')
    .get(notes.list_all_notes)
    .post(notes.create_a_note);

    app.route('/notes/:noteId')
    .get(notes.get_a_note)
    .put(notes.update_a_note)
    .delete(notes.delete_a_note);

};