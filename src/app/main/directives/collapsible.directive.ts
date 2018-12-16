import { Directive, ElementRef, OnInit } from "@angular/core";

import { Power1, TimelineLite } from "gsap";

@Directive({
	selector: "[collapsible]",
})
export class CollapsibleDirective implements OnInit {
	public hidden: boolean = true;

	private hiddenStyle = {
		autoAlpha: 0,
		ease: Power1.easeInOut,
		height: 0,
		scale: 0.8,
		transformOrigin: "center center",
	};
	private shownStyle = { autoAlpha: 1, ease: Power1.easeInOut, scale: 1, transformOrigin: "center center" };

	private get elem(): HTMLElement {
		return this._elem.nativeElement;
	}

	constructor(private _elem: ElementRef) {}

	ngOnInit() {
		this.hideInstantly();
	}

	public hide(): TimelineLite {
		this.hidden = true;
		return new TimelineLite()
			.to(this.elem, 2, this.hiddenStyle)
			.timeScale(2) as TimelineLite;
	}

	public hideInstantly(): TimelineLite {
		this.hidden = true;
		return new TimelineLite().set(this.elem, this.hiddenStyle);
	}

	public show(): TimelineLite {
		this.hidden = false;
		return new TimelineLite()
			.set(this.elem, { height: "auto" }, "start")
			.from(this.elem, 2, { height: 0, ease: Power1.easeInOut }, "start")
			.to(this.elem, 2, this.shownStyle, "start")
			.timeScale(2) as TimelineLite;
	}

	public showInstantly(): TimelineLite {
		this.hidden = false;
		return new TimelineLite().set(this.elem, this.shownStyle);
	}

	public toggle(): TimelineLite {
		return this.hidden ? this.show() : this.hide();
	}
}
