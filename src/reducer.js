import {user} from './redux/user.redux'

//把用户聊天对象抽象为一个redux的全局对象
import {chatuser} from './redux/chatuser.redux'

import {chat} from './redux/chat.redux'

// 合并所有的reducer，并且返回
import { combineReducers } from 'redux'

export default combineReducers({user, chatuser, chat})
