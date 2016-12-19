import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { CharactersService } from './services';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterThumbnailComponent } from './character-thumbnail/character-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FavoritesComponent,
    CharactersComponent,
    ComicsComponent,
    CharacterDetailsComponent,
    CharacterThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [ CharactersService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
