import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DayRsvpComponent } from "./day-rsvp/day-rsvp.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { EveningRsvpComponent } from "./evening-rsvp/evening-rsvp.component";

@NgModule({
  declarations: [
    AppComponent,
    DayRsvpComponent,
    HomeComponent,
    EveningRsvpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
