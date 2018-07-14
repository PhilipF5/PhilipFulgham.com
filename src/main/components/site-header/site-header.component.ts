import { Component, ElementRef, OnInit } from "@angular/core";

import { Power1, TimelineLite } from "gsap";

@Component({
	selector: "site-header",
	templateUrl: "./site-header.component.html",
	styleUrls: ["./site-header.component.scss"]
})
export class SiteHeaderComponent implements OnInit {
	private get elem(): HTMLElement {
		return this._elem.nativeElement;
	}

	constructor(private _elem: ElementRef) {}

	ngOnInit() {
		new TimelineLite().from(this.elem, 3, { opacity: 0, x: "10%", ease: Power1.easeInOut });
	}
}
