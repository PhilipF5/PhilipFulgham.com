import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "page-section",
	templateUrl: "./page-section.component.html",
	styleUrls: ["./page-section.component.scss"]
})
export class PageSectionComponent {
	@HostBinding("class.page-section") pageSection: boolean = true;
}
