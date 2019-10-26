import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  public password = "";
  public isDayGuest = false;
  public isEveningGuest = false;
  public isThanksGuest = false;

  private daytimePassword = "c3Vuc2hpbmU=";
  private eveningPassword = "bW9vbmxpZ2h0";
  private photoPassword = "dGhhbmtz";

  constructor() { }

  public ngOnInit(): void {
  }

  public checkPassword(password: string): void {
    if (btoa(password) === this.daytimePassword) {
      this.isDayGuest = true;
    } else if (btoa(password) === this.eveningPassword) {
      this.isEveningGuest = true;
    } else if (btoa(password) === this.photoPassword) {
      this.isThanksGuest = true;
    }
  }
}

<<<<<<< HEAD
window.onscroll = () => {
  const container = document.getElementById("container");
  const content = document.getElementById("content");

  if (content && window.pageYOffset + 150 > content.offsetTop) {
    container.classList.add("sticky");
  } else {
    container.classList.remove("sticky");
=======

window.onscroll = () => {  
  if (window.innerWidth > 600) {
    const container = document.getElementById("container");
    const content = document.getElementById("content");

    if (window.pageYOffset + 150 > content.offsetTop) {
      container.classList.add("sticky");
    } else {
      container.classList.remove("sticky");
    }
>>>>>>> b8c56e3419f88a2e5280464375414f1ce5130c5d
  }
};
