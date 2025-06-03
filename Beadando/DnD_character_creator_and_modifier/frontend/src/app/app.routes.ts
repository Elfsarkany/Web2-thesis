import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { WikiListComponent } from './components/wiki/wiki-list/wiki-list.component';
import { CharacterCreateComponent } from './components/character/character-create/character-create.component';
import { CharacterListComponent } from './components/character/character-list/character-list.component';
import { WikiCreateComponent } from './components/wiki/wiki-create/wiki-create.component';

export const routes: Routes = [
    {path:'', redirectTo:'wiki', pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
    {path: 'wiki', component: WikiListComponent},
    {path: 'wiki/create', component: WikiCreateComponent, canActivate: [authGuard]},
    {path: 'character', component: CharacterListComponent, canActivate: [authGuard]},
    {path: 'character/create', component: CharacterCreateComponent, canActivate: [authGuard]},
    {path: 'character/edit/:characterID', component: CharacterCreateComponent, canActivate: [authGuard]},
    {path: '**', redirectTo: 'wiki'},
];
