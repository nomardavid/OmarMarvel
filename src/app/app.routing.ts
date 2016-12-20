import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { CharacterIdComponent } from './character-id/character-id.component';


export const router: Routes = [
    { path: '', redirectTo: 'characters', pathMatch: 'full' },
    { path: 'characters', component: CharactersComponent },
    { path: 'characters/:id', component: CharacterIdComponent,
      children: [
          { path: '', redirectTo: ' comics ', pathMatch: 'full' },
          { path: 'comics', component: ComicsComponent }
      ]
    }
];

export const appRoutingProviders: any[] = [];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
