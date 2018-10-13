import { observable, action } from 'mobx'
import mobs from 'mobx'
import axios from 'axios';

class Store {
    API = axios.create({
        baseURL: `http://${window.location.hostname}:8080`,
    });

    @observable pets = [];
    @observable owners = [];

    @action
    fetchOwners() {
        this.API.get('/owners').then(this.setOwners);
    }

    @action
    fetchPets() {
        this.API.get('/pets').then(this.setPets);
    }

    @action.bound
    setOwners(response) {
        this.owners = response.data;
    }

    @action.bound
    setPets(response) {
        this.pets = response.data;
    }

}

export default Store;