import { Component } from "@angular/core";
import { ThemeService } from "./theme.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.less"],
		providers: [ThemeService]
})
export class AppComponent {
	title = "app works!";
constructor(private themeService: ThemeService) { }
		
}
