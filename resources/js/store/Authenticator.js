import Axios from 'axios';
import Storage from "./Storage";
import Connection from "./Connection";
import routes from "../router/api";

export default {
    async login(credentials) {
        let res = await Axios
            .post(routes.login, credentials)
        if(res.data.error){
            return false;
        } else {
            let user = res.data.user;
            Storage.set('user', user);
            Storage.set('token', user.api_token);
            Connection.setHeader('Authorization', `Bearer ${user.api_token}`);
            return true;
        }
    },

    logout(){
        Connection.removeHeader('Authorization');
        Storage.unset('user');
        Storage.unset('token');
    },

    isLoggedIn(){
        return !!Storage.get('token');
    },

    user(){
        return Storage.get('user');
    }
};
