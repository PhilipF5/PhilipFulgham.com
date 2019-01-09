import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Skill } from "app/main/models";
import { environment } from "environments/environment";

@Injectable()
export class SkillService {
	constructor(private http: HttpClient) {}

	public getSkills(): Observable<Skill[]> {
		return this.http
			.get<any[]>(environment.API_URL + "Skills")
			.pipe(map(res => res.sort((a, b) => {
				let nameA = a.alphaSort || a.name;
				let nameB = b.alphaSort || b.name;
				if (nameA.toLowerCase() < nameB.toLowerCase()) {
					return -1;
				} else {
					return 1;
				}
			})));
	}
}
