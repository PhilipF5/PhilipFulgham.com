import { Component, OnInit } from "@angular/core";

import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs";

import { Skill } from "main/models";

@Component({
	selector: "skills-grid",
	templateUrl: "./skills-grid.component.html",
	styleUrls: ["./skills-grid.component.scss"]
})
export class SkillsGridComponent implements OnInit {
	public skills: Observable<Skill[]>;

	constructor(private afs: AngularFirestore) {}

	ngOnInit() {
		this.skills = this.afs.collection<Skill>("skills", skill => skill.orderBy("name")).valueChanges();
	}
}
