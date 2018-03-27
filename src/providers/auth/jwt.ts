import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JwtProvider {

  jwt : string;

  constructor(private storage: Storage) {
    this.storage.get('jwt').then((data)=>{
      if(data) this.jwt = data
    })
  }

  getJwt(){
    return this.jwt
  }

}
