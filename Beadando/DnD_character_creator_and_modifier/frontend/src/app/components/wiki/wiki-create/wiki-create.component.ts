import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Feat } from '../wiki.models/feat';

@Component({
  selector: 'app-wiki-create',
  imports: [],
  templateUrl: './wiki-create.component.html',
  styleUrl: './wiki-create.component.css'
})
export class WikiCreateComponent {
  wikiData = {
    what: '',
    name: '',
    publication: '',
    origin: '',
    feats: '',
    requirementLvl: '',
    statBonuses: '',
    skillProficiencis: '',
    skillExpertises: '',
    skillSavingProficiencis: '',
    weaponProficiencis: '',
    spells: '',
    visions: '',
    weapontype: '',
    school: '',
    components: '',
    duration: '',
    range: '',
    target: '',
    description: ''
  };

  successMessage = '';
  errorMessage = '';


  addWikiElement(){
    
  }
}
