
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Ex world' });
};


exports.demo = function(req, res){
  res.render('demo', { title: 'Do world' ,header: 'world...' });
};

exports.app = function(req, res){
  res.render('bootstrap', { title: 'Do world' ,content: 'world...' });
};