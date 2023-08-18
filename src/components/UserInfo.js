export default class UserInfo {
    constructor({nameSelector, jobSelector}) {
        this._nameSelector = document.querySelector(nameSelector);
        this._jobSelector = jobSelector;
    }

    getUserInfo() {
        return {
            name: this._nameSelector, 
            job: this._jobSelector,
        };
    }

    setUserInfo(name, job) {
        this._nameSelector.textContent = name
        this._jobSelector.textContent = job;
    }
}
