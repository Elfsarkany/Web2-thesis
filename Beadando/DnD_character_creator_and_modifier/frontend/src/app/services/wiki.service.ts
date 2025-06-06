import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Feat } from '../components/wiki/wiki.models/feat';
import { Spell } from '../components/wiki/wiki.models/spell';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor (private http: HttpClient, private router: Router) { }


  getMasters(){
    
  }

  addWikiComponent(what: string, name: string, publication: string, origin: string, feats: Feat[], requirementLvl: number,
    statBonuses: number[], skillProficiencis: boolean[], skillExpertises: boolean[], skillSavingProficiencis: boolean[],
    weaponProficiencis: boolean[], spells: Spell[], visions: number[], weapontype: string, school: string, 
    components: string, duration: string, range: string, target: string, description: string){

    const body = {what, name, publication, origin, feats, requirementLvl, statBonuses, skillProficiencis, skillExpertises,
      skillSavingProficiencis, weaponProficiencis,spells, visions, weapontype, school, components, duration, range, target,description
    };
    return this.http.post('${environment.apiUrl}/wiki/create', body );
  }



}
