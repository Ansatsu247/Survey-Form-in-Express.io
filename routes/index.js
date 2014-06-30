module.exports = function Route(app){
  app.get('/', function(req, res){
    res.render('index');
  });
  app.post('/process', function(req, res){
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;
    req.session.sessionID = req.sessionID; //unique sessionID for the user
    req.session.save(function() {
      res.redirect('/results');
    });
  })
  app.get('/results', function(req, res) {
      res.render('results', {name: req.session.name, location: req.session.location,
                            language: req.session.language, comment: req.session.comment });
  })
}