
const _id = () => {
    return (1 + Math.random() * 12946127295).toString(16).replace(".", "");
}

const _findindex = (key, value, users)=>{
    return users.reduce((acc, user, idx)=>{
        if (user[key]===value){
            return idx;
        }
        return acc;
    },-1);
}

const _finduser = (key, value, users)=>{
    const index = _findindex(key, value, users);
    if (index != -1){
        return {...users[index]};
    }    
    return null;
}

export default class User{
    
    constructor(){
        this._users = [];
    }

    findOne(key, value){
       return _finduser(key,value,this._users);
    }

    save(user){
        const _user = {
            _id: _id(),
            ...user,
        }
        this._users.push(_user);
        return _user;
    }

    findById(_id){
        return _finduser("_id",_id,this._users);
    }   

    update(key, value, setkey, setvalue){
        const index = _findindex(key, value, this._users);
        if (index != -1){
            this.users[index] = {
                ...this.users[index],
                [setkey]:setvalue
            }
            return {
                ...this.users[index]
            }
        }
    }
}