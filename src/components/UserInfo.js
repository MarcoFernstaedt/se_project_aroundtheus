export default class UserInfo {
    constructor({name, job}) {
        this._name = name;
        this._job = job;
    }

    getUserInfo() {
        return {
            name: this._name, 
            job: this._job,
        };
    }

    setUserInfo(name, job) {
        this._nameTextField = document.querySelector('.profile__title').textContent = name
        this._jobTextField = document.querySelector('.profile__description').textContent = job;
    }
}
