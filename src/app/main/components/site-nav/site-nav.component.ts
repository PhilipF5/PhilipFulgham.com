import { Component, ElementRef, ViewChild } from "@angular/core";

import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { TimelineLite, TweenMax } from "gsap";

@Component({
	selector: "site-nav",
	templateUrl: "./site-nav.component.html",
	styleUrls: ["./site-nav.component.scss"],
})
export class SiteNavComponent {
	@ViewChild("bottomPiece", { read: ElementRef }) _bottomPiece: ElementRef;
	@ViewChild("middlePiece", { read: ElementRef }) _middlePiece: ElementRef;
	@ViewChild("topLeftPiece", { read: ElementRef }) _topLeftPiece: ElementRef;
	@ViewChild("topRightPiece", { read: ElementRef }) _topRightPiece: ElementRef;

	public isOpen: boolean = false;
	public menuIconPiece = faMinus;

	private openAnimation: TimelineLite;

	public get bottomPiece(): HTMLElement {
		return this._bottomPiece.nativeElement.querySelector("svg");
	}

	public get middlePiece(): HTMLElement {
		return this._middlePiece.nativeElement.querySelector("svg");
	}

	public get topLeftPiece(): HTMLElement {
		return this._topLeftPiece.nativeElement.querySelector("svg");
	}

	public get topRightPiece(): HTMLElement {
		return this._topRightPiece.nativeElement.querySelector("svg");
	}

	public close() {
		this.openAnimation.reverse();
	}

	public open() {
		if (this.openAnimation) {
			this.openAnimation.play();
		} else {
			this.openAnimation = new TimelineLite()
				.add(this.animateBottomPiece())
				.add(this.animateMiddlePiece(), "-=0.15")
				.add(this.animateTopPieces(), "-=0.15");
		}
	}

	public toggle() {
		(this.isOpen = !this.isOpen) ? this.open() : this.close();
	}

	private animateBottomPiece(): TweenMax {
		return TweenMax.to(this.bottomPiece, 0.25, { rotationZ: 90, y: 60, scaleX: 1.5, transformOrigin: "center center" });
	}

	private animateMiddlePiece(): TweenMax {
		return TweenMax.to(this.middlePiece, 0.25, { rotationZ: 90, y: 30, scaleX: 1.5, transformOrigin: "center center" });
	}

	private animateTopPieces(): TimelineLite {
		return new TimelineLite()
			.to(this.topLeftPiece, 0.25, { rotationZ: 45, x: 2, transformOrigin: "left center" }, 0)
			.to(this.topRightPiece, 0.25, { rotationZ: -45, x: -2, transformOrigin: "right center" }, 0);
	}
}
