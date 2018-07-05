import { Component, OnInit } from "@angular/core";

import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs";

import { PageSectionComponent } from "main/components/page-section/page-section.component";
import { Skill } from "main/models";

@Component({
	selector: "skills-grid",
	templateUrl: "./skills-grid.component.html",
	styleUrls: ["./skills-grid.component.scss"]
})
export class SkillsGridComponent extends PageSectionComponent implements OnInit {
	public skills: Observable<Skill[]>;

	constructor(private afs: AngularFirestore) {
		super();
	}

	ngOnInit() {
		this.skills = this.afs.collection<Skill>("skills", skill => skill.orderBy("name")).valueChanges();
	}
}
