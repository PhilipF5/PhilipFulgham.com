import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../theme.service";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.less"]
})
export class FooterComponent implements OnInit {
	
	public year;
	
	constructor(private themeService: ThemeService) {
		const date = new Date();
		this.year = date.getUTCFullYear();
	}
	
	public loadTheme(theme) {
		this.themeService.theme = theme;
		switch (theme) {
			case "light":
				document.body.style.backgroundColor = "white";
				break;
			case "dark":
				document.body.style.backgroundColor = "#2D3031";
				break;
		}
	}
	
	ngOnInit() {
		
	}
	
}
