import { Component, OnInit, ViewChild } from "@angular/core";

import { TimelineLite } from "gsap";

import { IntroScreenComponent } from "main/components";

@Component({
	selector: "home-page",
	templateUrl: "./home.page.html",
	styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
	@ViewChild(IntroScreenComponent) private introScreen: IntroScreenComponent;

	ngOnInit() {
		this.introScreen.load().delay(2);
	}
}
