import cron from "cron"
import https from "https"

const job = new cron.CronJob("*/14 * * * *", function(){
  https
  .get(process.env.API_URL, (res) =>{
    if(res.statusCode === 200) console.log("GET request sent successully");
    else console.log("GET request failed", res.statusCode)
  })
  .on("error", (e)=>console.log("Error while sending get request"))
})

export default job;