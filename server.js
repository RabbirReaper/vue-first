import express from 'express'
import cors from 'cors'
import axios from 'axios'
import dotenv from 'dotenv';

dotenv.config()
const app = express()
const port = 3000

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

// console.log(process.env.BOT_Token);

app.post('/sendMsgToChannel', async (req, res) => {
  
  await axios({
    method:'post',
    url:`https://discord.com/api/channels/${process.env.Application_ID}/messages`,
    headers:{
      Authorization: `Bot ${process.env.BOT_Token}` 
    },
    data:{
      content : req.body.msg
    }

  })
  res.send('Done!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
