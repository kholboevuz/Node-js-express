const http = require("http")
const fs = require("fs")
const path = require('path')


const server = http.createServer((req, res) =>{
    if(req.method === 'GET'){
        res.writeHead(200 , {"Content-type": 'text/html'})
        if(req.url === "/"){
            fs.readFile(path.join(__dirname , "templates" , "main.html"), 'utf-8' , (err, content)=>{
                if(err) throw err
                res.end(content)
            })
        } else if (req.url === '/about'){
            fs.readFile(path.join(__dirname , 'templates' , 'about.html') , 'utf-8' , (err , content)=>{
                if(err) throw err
                res.end(content)
            })
        } else if (req.url === '/contact'){
            fs.readFile(path.join(__dirname , 'templates' , 'contact.html') , 'utf-8' , (err , content)=>{
                if(err) throw err 
                res.end(content)
            })
        } else if (req.url === '/api/admin'){
            res.writeHead(200 , {"Content-type": 'text/json'})
            const admin = {name: 'Sevinchbek' , surname: 'Kholboev' , job: 'Full-satck developer'}
            res.end(JSON.stringify(admin))
        }
    } else if(req.method === 'POST'){
        const name = []
        req.on('data' , data=>{
            name.push(Buffer.from(data))
        })
        
        req.on('data' , ()=>{
            const messages = name.toString().split('=')[1];
            const text = messages.split('+')[0]
            const text2 = messages.split('+')[1]
            res.writeHead(200 , {'Content-Type': 'text/html'})
            res.end(
                `
                <h2>Siznig ismimgiz: ${text} ${text2} </h2> 
                `
                )
            })
        }
    })
    
    server.listen(3000, ()=>{
        console.log("Server running PORT: 3000");
    })
    // const server = http.createServer((request , response) =>{
    //     console.log(request.method);
    //     response.end("Hello world")
    // })