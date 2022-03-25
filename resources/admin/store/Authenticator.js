import axios from 'axios';

import routes from '../api';
import Storage from "../../js/store/Storage";
import Connection from "../../js/store/Connection";

const getRole = function(num){
  return {
      1: 'student',
      2: 'admin',
      3: 'qe',
      4: 'humas',
      5: 'companion',
  }[num];
};

const login = async function({username, password}){
    if(!username && !password) return false;
    let res = await axios.post(routes.login, {username, password});
    if(res.data.error)
        return false;
    else {
        let user = res.data.user;
        Storage.set('user', user);
        Storage.set('role', getRole(user.role_id));
        Storage.set('token', user.api_token);
        Connection.setHeader('Authorization', `Bearer ${user.api_token}`);
        console.log(user);
        return true;
    }
};

const logout = function() {
    Connection.removeHeader('Authorization');
    Storage.unset('user');
    Storage.unset('token');
    Storage.unset('role');
};

const user = function(){
    let user = Storage.get('user');
    return user ? user: null;
};

const role = function(){
    return Storage.get('role');
};

export default {
    login,
    logout,
    user,
    role
}
