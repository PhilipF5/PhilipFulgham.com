import { Component, OnInit } from "@angular/core";

@Component({
	selector: "portfolio",
	templateUrl: "./portfolio.component.html",
	styleUrls: ["./portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		
	}

	ngAfterViewInit() {
		window.scrollTo(0, 0);
	}

}