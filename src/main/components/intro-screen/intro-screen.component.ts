import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { TimelineLite } from "gsap";

@Component({
	selector: "intro-screen",
	templateUrl: "./intro-screen.component.html",
	styleUrls: ["./intro-screen.component.scss"]
})
export class IntroScreenComponent implements OnInit {
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

	ngOnInit() {
		
	}
}
