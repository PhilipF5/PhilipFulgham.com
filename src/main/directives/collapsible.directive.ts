import { Directive, ElementRef, OnInit } from "@angular/core";

import { Power1, TweenMax } from "gsap";

@Directive({
	selector: "[collapsible]",
})
export class CollapsibleDirective implements OnInit {
	public hidden: boolean = true;

	private hiddenStyle = {
		opacity: 0,
		ease: Power1.easeInOut,
		height: 0,
		scale: 0.8,
		transformOrigin: "center center",
	};
	private shownStyle = { opacity: 1, ease: Power1.easeInOut, scale: 1, transformOrigin: "center center" };

	private get elem(): HTMLElement {
		return this._elem.nativeElement;
	}

	constructor(private _elem: ElementRef) {}

	ngOnInit() {
		this.hideInstantly();
	}

	public hide(): TweenMax {
		this.hidden = true;
		return TweenMax.to(this.elem, 2, this.hiddenStyle);
	}

	public hideInstantly(): TweenMax {
		this.hidden = true;
		return TweenMax.set(this.elem, this.hiddenStyle);
	}

	public show(): TweenMax {
		this.hidden = false;
		TweenMax.set(this.elem, { height: "auto" });
		TweenMax.from(this.elem, 2, { height: 0, ease: Power1.easeInOut });
		return TweenMax.to(this.elem, 2, this.shownStyle);
	}

	public showInstantly(): TweenMax {
		this.hidden = false;
		return TweenMax.set(this.elem, this.shownStyle);
	}

	public toggle(): TweenMax {
		return this.hidden ? this.show() : this.hide();
	}
}
