import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import { AuthService } from './auth.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebase);

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  storageRef= firebase.app().storage().ref();

  constructor(private storage: Storage, private authService: AuthService) { }

  public async uploadImage(carpeta: string, name:string, imgBase64: any){

    try{
      let response = await this.storageRef.child(carpeta + "/" + name)
      .putString(imgBase64, 'data_url');
      return await response.ref.getDownloadURL();
    }catch(err){
      return null;
    }
  }
}
