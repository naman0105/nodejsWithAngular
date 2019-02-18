import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from './products.service';
import { RecommendationBarComponent } from './recommendation-bar/recommendation-bar.component';
import { RecommendationItemComponent } from './recommendation-bar/recommendation-item/recommendation-item.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    RecommendationBarComponent,
    RecommendationItemComponent,
    ChatbotComponent,
    MapComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
