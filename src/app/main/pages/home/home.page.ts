import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { AngularFireStorage } from "@angular/fire/storage";
import { Power1 } from "gsap";
import { Observable } from "rxjs";

import { IntroScreenComponent } from "app/main/components";

@Component({
	selector: "home-page",
	templateUrl: "./home.page.html",
	styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
	public imageUrl: Observable<string | null>;

	@ViewChild("background") private _background: ElementRef;
	@ViewChild(IntroScreenComponent) private introScreen: IntroScreenComponent;

	private get background(): HTMLElement {
		return this._background.nativeElement;
	}

	constructor(private storage: AngularFireStorage) {}

	ngOnInit() {
		this.imageUrl = this.storage.ref("galaxy.jpg").getDownloadURL();
		this.introScreen.load().to(this.background, 6, { opacity: 1, ease: Power1.easeInOut }, 2).delay(2);
	}
}
