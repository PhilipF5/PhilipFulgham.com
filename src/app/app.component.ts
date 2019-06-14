import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { CoreActions } from "app/core/actions";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	constructor(private store: Store<any>) {}

	ngOnInit() {
		this.store.dispatch(CoreActions.appLoading());
	}
}
