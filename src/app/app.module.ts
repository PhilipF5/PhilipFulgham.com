import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { ResponsiveModule } from "ng2-responsive";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { BioComponent } from "./bio/bio.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { QuoteDisplayComponent } from "./quote-display/quote-display.component";
import { SkillsComponent } from "./skills/skills.component";

@NgModule({
	declarations: [
		AppComponent,
		BioComponent,
		FooterComponent,
		HeaderComponent,
		PortfolioComponent,
		QuoteDisplayComponent,
		SkillsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ResponsiveModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
