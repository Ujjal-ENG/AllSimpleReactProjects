/* eslint-disable no-underscore-dangle */
class UserDTO {
    constructor(user) {
        this._id = user._id;
        this.userName = user.userName;
        this.name = user.name;
    }
}

export default UserDTO;
