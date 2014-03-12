
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.redirect('/home');
};

exports.home = function(req, res){
  res.render('index', { title: 'Wildwood Adventure Outfitters' });
};

exports.compasses = function(req, res){
  res.render('compasses', { title: 'Compasses' });
};

exports.si = function(req, res){
  res.render('si', { title: 'Finger Sticks' });
};

exports.contact = function(req, res){
  res.render('contact', { title: 'Contact' });
};

exports.links = function(req, res){
  res.render('links', { title: 'Links' });
};