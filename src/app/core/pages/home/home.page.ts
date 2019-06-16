import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { IntroScreenComponent } from "app/core/components";
import { Power1 } from "gsap";

@Component({
	selector: "pf-home-page",
	templateUrl: "./home.page.html",
	styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
	@ViewChild("background", { static: true }) private _background: ElementRef;
	@ViewChild(IntroScreenComponent, { static: true }) private introScreen: IntroScreenComponent;

	private get background(): HTMLElement {
		return this._background.nativeElement;
	}

	ngOnInit() {
		this.animateBackground();
	}

	private animateBackground() {
		this.introScreen
			.load()
			.to(this.background, 6, { opacity: 1, ease: Power1.easeInOut }, 2)
			.delay(2);
	}
}
