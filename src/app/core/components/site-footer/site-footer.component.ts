import { Component } from "@angular/core";
import { environment } from "environments/environment";
import { DateTime } from "luxon";

@Component({
	selector: "pf-site-footer",
	templateUrl: "./site-footer.component.html",
	styleUrls: ["./site-footer.component.scss"],
})
export class SiteFooterComponent {
	public version = environment.VERSION;
	public year = DateTime.local().toFormat("yyyy");
}
