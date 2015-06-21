
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('artigo', { title: 'Artigo' });
};