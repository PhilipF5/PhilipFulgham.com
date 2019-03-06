import { Component, Input } from "@angular/core";

@Component({
	selector: "history-item",
	templateUrl: "./history-item.component.html",
	styleUrls: ["./history-item.component.scss"],
})
export class HistoryItemComponent {
	@Input() image: string;
	@Input() name: string;
	@Input() place: string;
	@Input() subtitle: string;
}
