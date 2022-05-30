import Mock from 'mockjs'

Mock.mock('/api/user/login',{
    "status": 0,
    "data": {
        "id": 12,    // id | 1-10 : 0   mock语法随机生成1-10的数，默认值为0
        "username": "admin",   // "username": "@cname" mock语法随机生成一个中文名字
        "email": "admin@51purse.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
})