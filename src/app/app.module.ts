import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material";

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
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
