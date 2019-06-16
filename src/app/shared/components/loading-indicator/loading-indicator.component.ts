import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { Linear, TweenMax } from "gsap";

@Component({
	selector: "pf-loading-indicator",
	templateUrl: "./loading-indicator.component.html",
	styleUrls: ["./loading-indicator.component.scss"],
})
export class LoadingIndicatorComponent implements AfterViewInit {
	@ViewChild("back", { static: true }) private _back: ElementRef;
	@ViewChild("front", { static: true }) private _front: ElementRef;

	private get back(): HTMLElement {
		return this._back.nativeElement;
	}

	private get front(): HTMLElement {
		return this._front.nativeElement;
	}

	ngAfterViewInit() {
		TweenMax.set(this.front, { x: 1 });
		TweenMax.to(this.front, 3, { rotationZ: 360, transformOrigin: "11.5px 12.5px", ease: Linear.easeInOut }).repeat(
			-1
		);
	}
}
