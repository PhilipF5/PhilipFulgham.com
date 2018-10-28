import { Component } from "@angular/core";
import { environment } from "environments/environment";
import * as moment from "moment";

@Component({
	selector: "site-footer",
	templateUrl: "./site-footer.component.html",
	styleUrls: ["./site-footer.component.scss"],
})
export class SiteFooterComponent {
	public version = environment.VERSION;
	public year = moment().format("YYYY");
}
