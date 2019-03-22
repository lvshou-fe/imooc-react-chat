const mongoose = require('mongoose')
// 连接mongoose 并且使用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc-chat'
mongoose.connect(DB_URL)

const models = {
    user: {
        'user': {type: String, require: true},
        'pwd': {type: String, require: true},
        'type': {type: String, require: true},
        'avatar': {type: String},
        // 个人简介或者职务简介
        'desc': {type: String},
        // 职位名
        'title': {type: String},
        // 如果你是boss 还有两个字段
        'company': {type: String},
        'money': {type: String}
    },
    chat: {
        //2个的聊天id 唯一标示
        'chatid': {type: String, require: true},
        //来源
        'from': {type: String, require: true},
        //去哪里
        'to': {type: String, require: true},
        //读的状态  只有to 有read的状态
        'read': {type: Boolean, default: false},
        //内容
        'content': {type: String, require: true, default: ''},
        //创建时间
        'create_time': {type: Number, default: new Date().getTime()}
    }
}

for (let m in models) {
    mongoose.model(m , new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function (name) {
        return mongoose.model(name)
      }
}
