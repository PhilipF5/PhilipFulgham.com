import { Injectable } from "@angular/core";

@Injectable()
export class ThemeService {
	
	theme = "dark";

	constructor() {
		switch (this.theme) {
			case "light":
				document.body.style.backgroundColor = "white";
				break;
			case "dark":
				document.body.style.backgroundColor = "black";
				break;
		}
	}

}
