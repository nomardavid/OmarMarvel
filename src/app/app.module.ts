import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { CharactersService } from './services';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterThumbnailComponent } from './character-thumbnail/character-thumbnail.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { FourFilterPipe } from './pipes/four-filter.pipe';
import { ModalComicsComponent } from './modal-comics/modal-comics.component';
import { CharacterIdComponent } from './character-id/character-id.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    CharactersComponent,
    ComicsComponent,
    CharacterDetailsComponent,
    CharacterThumbnailComponent,
    PaginatorComponent,
    FourFilterPipe,
    ModalComicsComponent,
    CharacterIdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    CharactersService,
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
