import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../theme.service";

@Component({
	selector: "app-portfolio",
	templateUrl: "./portfolio.component.html",
	styleUrls: ["./portfolio.component.less"]
})
export class PortfolioComponent implements OnInit {

	constructor(private themeService: ThemeService) { }

	ngOnInit() {
		
	}

	ngAfterViewInit() {
		window.scrollTo(0, 0);
	}

}
