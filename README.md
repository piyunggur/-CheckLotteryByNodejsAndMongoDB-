# CheckLotteryByNodejsAndMongoDB
### Check Lottery By Nodejs And MongoDB
>โดยในส่วนงานนี้ จะเป็นการดึงข้อมูลจากหน้าเว็บ`(WebScarab)`จากเว็บไซน์ [กระปุกดอทคอม](http://lottery.kapook.com/)
แล้วบันทึกลงฐานข้อมูล`(ในที่นี้จะใช้ MongoDB)` ด้วย **_Nodejs_** โดยจะมี
1. มี [scrap.js](https://github.com/piyunggur/-CheckLotteryByNodejsAndMongoDB-/blob/master/scrap.js) เป็นตัวดึงข้อมูลจากหน้าเว็บ
2. มี [srver.js](https://github.com/piyunggur/-CheckLotteryByNodejsAndMongoDB-/blob/master/server.js) เป็นตัวรับ GET และ POST จากผู้ใช้
3. และ [findAndQuery.js](https://github.com/piyunggur/-CheckLotteryByNodejsAndMongoDB-/blob/master/findAndQuery.js) เป็นตัวดึงข้อมูลจาก _MongoDB_:

การติดตั้ง
======
+ [Nodejs](https://nodejs.org/en/download/)
+ [MongoDB](https://www.mongodb.com/download-center?jmp=tutorials&_ga=2.259400330.1080079461.1511518398-754005345.1509113673#atlas)
