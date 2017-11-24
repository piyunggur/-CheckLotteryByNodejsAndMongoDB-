# CheckLotteryByNodejsAndMongoDB
### Check Lottery By Nodejs And MongoDB
โดยในส่วนงานนี้ จะเป็นการดึงข้อมูลจากหน้าเว็บ`(WebScarab)`จากเว็บไซน์ [กระปุกดอทคอม](http://lottery.kapook.com/)
แล้วบันทึกลงฐานข้อมูล`(ในที่นี้จะใช้ MongoDB)` ด้วย **_Nodejs_** โดยจะมี
1. มี scrap.js เป็นตัวดึงข้อมูลจากหน้าเว็บ
2. มี srver.js เป็นตัวรับ GET และ POST จากผู้ใช้
3. และ findAndQuery.js เป็นตัวดึงข้อมูลจาก MongoDB

======

