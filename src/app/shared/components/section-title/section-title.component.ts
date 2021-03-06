import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { ArrowComponent } from "../arrow/arrow.component";

@Component({
	selector: "pf-section-title",
	templateUrl: "./section-title.component.html",
	styleUrls: ["./section-title.component.scss"],
})
export class SectionTitleComponent {
	@Output() public expand: EventEmitter<void> = new EventEmitter();
	@Input() public expandable: boolean;
	@Input() public text: string;

	@ViewChild(ArrowComponent, { static: false }) private arrow: ArrowComponent;
	private expanded: boolean;

	public trigger(): void {
		if (this.expandable && !this.expanded) {
			this.arrow.flip();
			this.expanded = !this.expanded;
			this.expand.emit();
		} else if (this.expandable && this.expanded) {
			this.arrow.flipBack();
			this.expanded = !this.expanded;
			this.expand.emit();
		}
	}
}
