import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule }   from "@angular/router";
import { ResponsiveModule } from "ng2-responsive";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { FooterComponent } from "./footer/footer.component";
import { SkillsComponent } from "./skills/skills.component";
import { BioComponent } from "./bio/bio.component";
import { ThemeService } from "./theme.service";

@NgModule({
	declarations: [
		AppComponent,
			HeaderComponent,
			PortfolioComponent,
			FooterComponent,
			SkillsComponent,
			BioComponent
	],
	imports: [
		BrowserModule,
			ResponsiveModule,
		FormsModule,
		HttpModule,
			RouterModule.forRoot([
	{
		path: "portfolio",
		component: PortfolioComponent
	},
					{
							path: "skills",
							component: SkillsComponent
					},
					{
							path: "bio",
							component: BioComponent
					},
					{
							path: "",
							redirectTo: "/bio",
							pathMatch: "full"
					}
])
	],
	providers: [ThemeService],
	bootstrap: [AppComponent]
})
export class AppModule { }
