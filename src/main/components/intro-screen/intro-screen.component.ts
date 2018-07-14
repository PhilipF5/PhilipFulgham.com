import { Component, ElementRef, ViewChild } from "@angular/core";

import { Power1, TimelineLite } from "gsap";

@Component({
	selector: "intro-screen",
	templateUrl: "./intro-screen.component.html",
	styleUrls: ["./intro-screen.component.scss"]
})
export class IntroScreenComponent {
	@ViewChild("byline") private _byline: ElementRef;
	@ViewChild("quote") private _quote: ElementRef;
	@ViewChild("scrollArrow") private _scrollArrow: ElementRef;

	private get byline(): HTMLElement {
		return this._byline.nativeElement;
	}

	private get quote(): HTMLElement {
		return this._quote.nativeElement;
	}

	private get scrollArrow(): HTMLElement {
		return this._scrollArrow.nativeElement;
	}

	public load(): TimelineLite {
		return new TimelineLite()
			.from(this.quote, 2, { x: -50, ease: Power1.easeInOut }, "start")
			.to(this.quote, 2, { opacity: 1, ease: Power1.easeInOut }, "start")
			.to(this.byline, 2, { opacity: 1, ease: Power1.easeInOut });
	}
}
