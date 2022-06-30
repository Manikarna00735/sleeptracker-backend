const express = require("express");
const router = express.Router();
const sleepdata = require("./SleepData");
const client = require("./app");





const toMinutes=(str)=>{
    var parts = str.split(":");
    return parts[0]*60+parts[1]*1;   
}

const durCal=(str,str1)=>{
    var min = ((1440-toMinutes(str))+toMinutes(str1));
    return min/60;
}

router.post(`/data`, (req,res)=>{
    const details = req.body.data;
    details.duration = durCal(details.sleep,details.wakeup);
    const name = req.body.name;

    const index = sleepdata.findIndex((data)=>{
        return data.hasOwnProperty(name);
     });

    if(index == -1 ){
        const singleperson = {};
    singleperson[name] = []; 
    singleperson[name].push(details);
    sleepdata.push(singleperson);
    res.send(singleperson[name]);
    }else{
        temp = sleepdata[index];
        temp[name].push(details);
        res.send(temp[name]);
    }
    


});

router.get(`/data`, (req,res)=>{
    const name = req.query.name;
    const index = sleepdata.findIndex((data)=>{
        return data.hasOwnProperty(name);
     });
     if(index != -1){
     temp = sleepdata[index];
        res.send(temp[name]);
     }
});

router.get(`/sleep`,(req,res)=>{
    //     const name = req.query.name;
    //     client.query('select * from sleeptracker where username = mani', (err,result)=>{
    //         if(!err){
    //             console.log(result.rows);
    //             console.log(name);
    //             res.send(true);
    //         }
    //         else{
    //             console.log(err);
    //         }
    //     });
    // client.end();
     res.send("welcome")
    })

module.exports = router;