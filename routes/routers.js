const router=require("express").Router();
const apiKeyMiddleWare=require("../middleWares/apiKey");



//  router.use(apiKeyMiddleWare)            //yeh saare routers m middleWare lgg jayga    http://localhost:4000/?api_key=1234567  ;- Home ko bhi aise hi access krrna hoga bina api_key ke kuch nhi krr skte jab humm baat krrte h  (Router Level Middlewares ki)


router.get("/",(req,res)=>{
    res.render("index",{
        title:"Home"
    })
})

router.get("/",(req,res)=>{
    res.render("index",{
        title:"Home"
    })
})

router.get("/about",(req,res)=>{
    res.render("about",{title:"About"})
})

router.get("/download",(req,res)=>{
    res.download(path.resolve(__dirname)+"/views/about.ejs")
})



//Api   Single Router Level MiddleWare  
// agar mutliple middleware dene ho kisi bhi router m toh humm array m daal denge usse   eg.  router.get("/api/products",[apiKeyMiddleWare,otherMiddleware],(req,res)=>{ 
router.get("/api/products",[apiKeyMiddleWare],(req,res)=>{  
    res.json([
        {
            id:1234,
            name:"chrome"
        },
        {
            id:1267,
            name:"fireFox"
        }
    ])
})

module.exports=router;