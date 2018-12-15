import { Component, ElementRef, ViewChild } from "@angular/core";

import { Power1, TimelineLite, TweenMax } from "gsap";
import { ScrollToPlugin } from "gsap/all";

import { ArrowComponent } from "app/main/components/arrow/arrow.component";

const plugins = [ScrollToPlugin];

@Component({
	selector: "intro-screen",
	templateUrl: "./intro-screen.component.html",
	styleUrls: ["./intro-screen.component.scss"]
})
export class IntroScreenComponent {
	@ViewChild("byline") private _byline: ElementRef;
	@ViewChild("quote") private _quote: ElementRef;
	@ViewChild(ArrowComponent) private _scrollArrow: ArrowComponent;

	private get byline(): HTMLElement {
		return this._byline.nativeElement;
	}

	private get quote(): HTMLElement {
		return this._quote.nativeElement;
	}

	private get scrollArrow(): HTMLElement {
		return this._scrollArrow.elem;
	}

	public load(): TimelineLite {
		return new TimelineLite()
			.from(this.quote, 4, { x: -50, ease: Power1.easeOut }, "start")
			.to(this.quote, 4, { opacity: 1, ease: Power1.easeOut }, "start")
			.to(this.byline, 2, { opacity: 1, ease: Power1.easeInOut }, "-=2")
			.to(this.scrollArrow, 1, { opacity: 1, ease: Power1.easeInOut })
			.add(TweenMax.to(this.scrollArrow, 2, { opacity: 0.5, ease: Power1.easeInOut }).repeat(-1).yoyo(true));
	}

	public scroll(): TweenMax {
		return TweenMax.to(window, 2, { scrollTo: "about-me", ease: Power1.easeInOut });
	}
}
