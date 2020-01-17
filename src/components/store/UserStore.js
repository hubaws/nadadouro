import { observable , action , computed} from 'mobx';

class userStore {

    getLocalStorage() {
        return localStorage.getItem('userStore')
    }

    @observable test = [];

    constructor() {
        console.log('CONSTRUCT')
        this.test = this.getLocalStorage()
    }
    
    @computed get testValue () {
        return this.test
    }

    @action changeTestValue = (NewTest) => {
        const storage = this.getLocalStorage()
        if(this.test) {
            if(this.test.indexOf(NewTest) < 0){
                this.test = [ storage, NewTest]
            }
        }else{
            this.test = NewTest
        }
        localStorage.setItem('userStore', this.test)
    }

}

const UserStore = new userStore();

export default UserStore;