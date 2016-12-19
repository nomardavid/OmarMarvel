import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';


export const router: Routes = [
    { path: '', redirectTo: 'characters', pathMatch: 'full' },
    { path: 'characters', component: CharactersComponent },
    { path: 'character/:id', component: CharacterDetailsComponent },
    { path: 'comics', component: ComicsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
