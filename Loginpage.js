const express = require("express");
const router = express.Router();
const data = require("./DataBase")

router.post("/data", (req,res)=>{
    const userDetail = req.body;
    let resp = false; 
    for(let x in data){
        if((data[x].email === userDetail.email) && (data[x].password === userDetail.password)){
            resp = true;
        }

    }
    res.send(resp);
})


module.exports = router;