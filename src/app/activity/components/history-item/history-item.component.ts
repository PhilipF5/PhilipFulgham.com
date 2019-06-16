import { Component, Input } from "@angular/core";
import { DateTime } from "luxon";

@Component({
	selector: "pf-history-item",
	templateUrl: "./history-item.component.html",
	styleUrls: ["./history-item.component.scss"],
})
export class HistoryItemComponent {
	@Input() end: DateTime;
	@Input() image: string;
	@Input() link: string;
	@Input() name: string;
	@Input() place: string;
	@Input() start: DateTime;
	@Input() subtitle: string;

	public get hasDates(): boolean {
		return !!this.start;
	}
}
