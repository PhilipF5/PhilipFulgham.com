import { Component, ElementRef, ViewChild } from "@angular/core";
import { ArrowComponent } from "app/shared/components";
import { Power1, TimelineLite, TweenMax } from "gsap";
import { ScrollToPlugin } from "gsap/all";

const plugins = [ScrollToPlugin];

@Component({
	selector: "pf-intro-screen",
	templateUrl: "./intro-screen.component.html",
	styleUrls: ["./intro-screen.component.scss"],
})
export class IntroScreenComponent {
	@ViewChild("byline", { static: true }) private _byline: ElementRef;
	@ViewChild("quote", { static: true }) private _quote: ElementRef;
	@ViewChild(ArrowComponent, { static: true }) private _scrollArrow: ArrowComponent;

	private get byline(): HTMLElement {
		return this._byline.nativeElement;
	}

	private get quote(): HTMLElement {
		return this._quote.nativeElement;
	}

	private get scrollArrow(): HTMLElement {
		return this._scrollArrow.elem;
	}

	public load = () =>
		new TimelineLite()
			.from(this.quote, 4, { x: -50, ease: Power1.easeOut }, "start")
			.to(this.quote, 4, { opacity: 1, ease: Power1.easeOut }, "start")
			.to(this.byline, 2, { opacity: 1, ease: Power1.easeInOut }, "-=2")
			.to(this.scrollArrow, 1, { opacity: 1, ease: Power1.easeInOut })
			.add(
				TweenMax.to(this.scrollArrow, 0.5, { opacity: 0.5, ease: Power1.easeInOut })
					.repeat(4)
					.yoyo(true)
			);

	public scroll = () => TweenMax.to(window, 2, { scrollTo: "about-me", ease: Power1.easeInOut });
}
