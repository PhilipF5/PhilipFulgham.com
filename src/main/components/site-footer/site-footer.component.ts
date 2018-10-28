import { Component, OnInit } from "@angular/core";
import { environment } from "environments/environment";

@Component({
	selector: "site-footer",
	templateUrl: "./site-footer.component.html",
	styleUrls: ["./site-footer.component.scss"]
})
export class SiteFooterComponent implements OnInit {
	
	public version = environment.VERSION;
	public year;
	
	constructor() {
		const date = new Date();
		this.year = date.getUTCFullYear();
	}
	
	ngOnInit() {
		
	}
	
}
