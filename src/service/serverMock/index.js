const fs = require('fs');
const querystirng = require('querystring');
const path = require('path');
module.exports = (app)=>{
    app.use((req,res,next)=>{ // 解析post请求的数据
        let bodyStr = '';
        req.on('data',chuck=>{
            bodyStr += chuck;
        });
        req.on('end',()=>{
            let oBodyData = null;
            try{
                oBodyData = JSON.parse(bodyStr);
            }catch(err){
                try{
                    oBodyData = querystirng.parse(bodyStr);
                }catch(err){
                    throw new Error('post参数格式不正确');
                }
            }
            req.body = oBodyData;
            next();
        })
    });


    app.get('/test',function(req,res){
        res.json({code:0});
    });



    let msgPath = path.join(__dirname,'./data/msg.json');
    app.post('/saveMsg',function(req,res){
        let {msg} = req.body;
        
        if(!msg){
            res.json({code:0,msg:'参数有误'})
            return;
        }
        let oMsg = JSON.parse(fs.readFileSync(msgPath,'utf-8') || '[]');
        oMsg.push(msg);
        fs.writeFileSync(msgPath,JSON.stringify(oMsg),'utf-8');
        res.json({code:1,msg:'成功'});

    });

    app.get('/getList',function(req,res){
        let msgList = fs.readFileSync(msgPath,'utf-8');
        msgList = JSON.parse(msgList);
        res.json({code:1,msg:'成功',msgList});
    });





}