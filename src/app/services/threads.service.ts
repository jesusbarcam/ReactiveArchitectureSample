import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { AllUserData } from '../../../shared/to/all-user-data';


@Injectable()
export class ThreadsService {

  constructor(private http:Http) { }


  /**
   * @private
   * @method
   * @return Observable<AllUserData>
   * @description
   * 
   */
  loadUserThreads():Observable<AllUserData> {
    return this.http.get('/api/threads')
              .map(res => res.json());
  }//loadUserThreads




}//ThreadsService
