import { Component } from "@angular/core";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "pf-error",
	templateUrl: "./error.component.html",
	styleUrls: ["./error.component.scss"],
})
export class ErrorComponent {
	public icon = faExclamationTriangle;
}
