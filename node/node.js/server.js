var http=require("http");
var url=require("url");
var querystring =require('querystring')


var server=http.createServer(function(req,res){
    var page=url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200,{"content-type":"text/plain"});
    if (page == '/') {
        res.write ('Vous êtes dans la page d\'accueil');
     }
     else if (page == '/Contact') {
        res.write ('Vous êtes dans la page Contact !');
     }
     else if (page == '/Affichage/1/user') {
        res.write ('Affichez 1\'utilisateur qui a 1\*id 1 !');
     }
     else {return {status:404,message:'404 not founs'};}

     var params=querystring.parse(url.parse(req.url).query);
     res.writeHead(200,{"content-type":"text/plain"});
     if ('id' in params && 'login' in params){
        res.write('Votre id est '+params['id']+
        ' et votre login '+params['login']);
     }
     else{
        res.write('Veuillez saisir votre id et login!');
     }
    
    res.end();
});
server.listen(8080);