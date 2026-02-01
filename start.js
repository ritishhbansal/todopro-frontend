const express = require("express");
const path = require("path");
const services = require("./services/api");
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public","index.html"));
});

let user_id;

app.post("/tasks", async (req, res, next) => {
    const data = req.body;
    const result = await services.tasksave(data);
    res.redirect('/home');
})


app.get("/list/:id", async (req, res, next) => {
    const id=req.params.id;
    const list = await services.fetchdata(id);
    return res.render('list', {item:list});
})

app.get("/login", (req, res, next) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
})

app.get("/signup", (req, res, next) => {
    res.sendFile(path.join(__dirname, "public", "createacc.html"));
})

app.post("/login", async (req, res, next) => {
    const data = req.body;
    const result = await services.postlogin(data);
    user=result;
    console.log("global variable is ",user)
    if (result.message){
        res.send(`${result.message}`)
    }else{
        res.render('input',{data:result});
    }
})
app.get('/home',(req,res,next)=>{
    res.render('input', {data:user})
})

app.get("/logout", async (req, res, next) =>{
    const result = await services.logout;
    console.log("Logout successfully", result);
    res.redirect("/");
})

app.post("/signup", async (req, res, next) => {
    const data = req.body;
    const result = await services.postsignup(data);
    res.redirect("/login");
})

app.get("/delete/:id", async (req, res, next) => {
    const id = req.params.id;
    const result = await services.taskdelete(id);
    console.log("Deleted successfully", result);
})

app.get("/edit/:id", async (req, res, next) => {
        const id = req.params.id;
        const result = await services.edittask(id);
        console.log( "my task data is ",result);

        res.render("edittask", {task:result});
});

app.post("/updatetask/:id", async (req, res, next) => {
    const id=req.params.id;
    const data = req.body;
    console.log('data is this',data);
    const result = await services.updatetask(data,id);
    console.log("task updated successfuly", result);
    res.redirect('/home');
})

app.get("/forget", async (req, res, next) => {
    res.render("forget")
})

app.post("/email", async (req, res, next) => {
    const data = req.body;
    console.log("data is", data);
    const result = await services.findemail(data);
    console.log("email find for pass update", result);
    if (result.status === false ){
        res.send("User not found")
    }else if(result.status === true ) {
        console.log("ID for getting getting", result);
        res.render('otp', {userId : result.id})
    }
})

app.post("/resetpass/:id", async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    console.log("User id is", id);
    console.log("data is", data);
    const result = await services.updatepass(data, id);
    console.log("Pass updated succesfully", result);
    res.redirect("/login");
})

app.post("/otp/:id", async (req, res, next) => {
    const id = req.params.id;
    console.log("Id for update pas", id);
    const data = req.body;
    console.log("otp is", data);
    const result = await services.otp(data);
    if(result.status === true) {
        res.render("updatepass", {userid:id});
    } else {
        res.send("OTP Is not correct/found");
    }
})

app.get("/completed/:id", async (req, res, next) => {
    const id = req.params.id;
    console.log("completed task id", id);
    const result = await services.complete(id);
})

const PORT = 3958;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);

});
