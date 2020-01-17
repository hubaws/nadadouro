import { observable, computed, action } from 'mobx'

class authStore {
    @observable isAuthed = false

    @action isAuthedChange = () => {
        console.log('CHANGE')
        this.isAuthed = true
    } 
}

const AuthStore = new authStore();
export default AuthStore;