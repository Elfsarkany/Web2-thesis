import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Feat } from '../components/wiki/wiki.models/feat';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor (private http: HttpClient, private router: Router) { }

  addFeat(feat: Feat){
    const body = {what: 'feat', feat};
    return this.http.post('${environment.apiUrl}/wiki/create', body );
  }



}
