(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // add.js
  var require_add = __commonJS({
    "add.js"(exports, module) {
      var add2 = (a, b) => a + b;
      module.exports = add2;
    }
  });

  // multiply.js
  var require_multiply = __commonJS({
    "multiply.js"(exports, module) {
      var multiply2 = (a, b) => a + b;
      module.exports = multiply2;
    }
  });

  // model/notesModel.js
  var require_notesModel = __commonJS({
    "model/notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // index.js
  var add = require_add();
  var multiply = require_multiply();
  var NotesModel = require_notesModel();
  console.log("The notes app is running");
  var model = new NotesModel();
  console.log(model.getNotes());
})();
