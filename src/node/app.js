const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");

const app = express();
const port = 3000;

//--

app.engine("hbs", expressHbs(
    {
        layoutsDir: "views/layouts", 
        defaultLayout: "layout",
        extname: "hbs"
    }
))

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//--

app.use('/', express.static('./node_modules/admin-lte'));

//--

body = {
    title: "Мои контакты",
    email: "gavgav@mycorp.com",
    phone: "+1234567890"
};


app.use("/contact", function(request, response){
   
    response.render("contact", body);
});

app.use("/home", function(request, response){
     
    response.render("home");
});

app.use("/starter", function(request, response){
     
    response.render("starter", body);
});

app.use(express.json());

app.use("/handlebars", function(request, response){
    response.render(request.body.template, request.body.data);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
