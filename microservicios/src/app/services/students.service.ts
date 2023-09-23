import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private clientHttp : HttpClient) {

  }

  getStudents (){
    return this.clientHttp.get('http://localhost:3000');
  }

}
