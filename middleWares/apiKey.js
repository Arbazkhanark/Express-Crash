function apiKey(req,res,next){
    const api='1234567';
    const userEnteredKey=req.query.api_key;
    if(userEnteredKey && userEnteredKey===api){
        next();
    }else{
        res.json([
            {message:"Not valid"}
        ])
    }
}


module.exports=apiKey;