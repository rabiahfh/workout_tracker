module.exports = (app) => {



app.post("/submit", ({body}, res) => {
    // creating the book
    db.Book.create(body)
      // adding the book id to the library - new:true will force the return of the modified document
      .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
  
      // we now have the library with the new book id
      .then(dbLibrary => {
        res.json(dbLibrary);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.get("/books", (req, res) => {
    db.Book.find({})
      .then(dbBook => {
        res.json(dbBook);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.get("/library", (req, res) => {
    db.Library.find({})
      .then(dbLibrary => {
        res.json(dbLibrary);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.get("/populated", (req, res) => {
    db.Library.find({})
      .populate("books")
      .then(dbLibrary => {
        res.json(dbLibrary);
      })
      .catch(err => {
        res.json(err);
      });
  })};