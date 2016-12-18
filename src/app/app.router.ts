import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';


export const router: Routes = [
    { path: '', redirectTo: 'characters', pathMatch: 'full' },
    { path: 'characters', component: CharactersComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);