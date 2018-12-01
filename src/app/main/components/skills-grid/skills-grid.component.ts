import { Component, OnInit } from "@angular/core";

import { AngularFirestore, QuerySnapshot } from "@angular/fire/firestore";
import { Observable, VirtualTimeScheduler } from "rxjs";
import { map, take } from "rxjs/operators";

import { Skill } from "app/main/models";

@Component({
	selector: "skills-grid",
	templateUrl: "./skills-grid.component.html",
	styleUrls: ["./skills-grid.component.scss"],
})
export class SkillsGridComponent implements OnInit {
	public skills: Skill[];

	constructor(private afs: AngularFirestore) {}

	ngOnInit() {
		this.loadSkills();
	}

	private async loadSkills() {
		let skills = await this.afs
			.collection<Skill>("skills")
			.get()
			.pipe(
				map<QuerySnapshot<Skill>, Skill[]>(collection => collection.docs.map(doc => doc.data())),
				take(1)
			)
			.toPromise();

		this.skills = skills.sort((a, b) => {
			let nameA = a.alphaSort || a.name;
			let nameB = b.alphaSort || b.name;
			if (nameA.toLowerCase() < nameB.toLowerCase()) {
				return -1;
			} else {
				return 1;
			}
		});
	}
}
