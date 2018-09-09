import { DayRsvpComponent } from "./day-rsvp/day-rsvp.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { EveningRsvpComponent } from "./evening-rsvp/evening-rsvp.component";

const routes: Routes = [
    {
        path: "resvept",
        component: DayRsvpComponent
    },
    {
        path: "areessveepee",
        component: EveningRsvpComponent
    },
    {
        path: "",
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
