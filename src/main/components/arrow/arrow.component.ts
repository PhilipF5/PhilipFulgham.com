import { Component, ElementRef, ViewChild, Input } from "@angular/core";

import { Power1, TweenMax } from "gsap";

@Component({
	selector: "arrow",
	templateUrl: "./arrow.component.html",
	styleUrls: ["./arrow.component.scss"]
})
export class ArrowComponent {
	@Input() public size: number = 1;
	@Input() public width: number = 1;

	public get containerTransform(): any {
		return {
			transform: `scaleX(${this.width}) scale(${this.size})`
		};
	}

	public get lineTransform(): any {
		return {
			strokeWidth: 1 / this.size
		};
	}

	@ViewChild("arrow") private _svg: ElementRef;

	private get svg(): HTMLElement {
		return this._svg.nativeElement;
	}

	public flip(): TweenMax {
		return TweenMax.to(this.svg, 1, { rotationX: 180, transformOrigin: "center center", ease: Power1.easeInOut });
	}

	public flipBack(): TweenMax {
		return TweenMax.to(this.svg, 1, { rotationX: 0, transformOrigin: "center center", ease: Power1.easeInOut });
	}
}
