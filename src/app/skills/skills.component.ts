import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {
    
skills;
    
constructor(private http:Http, private themeService: ThemeService) {
    http.get('assets/skills.json')
                .subscribe(res => this.skills = res.json());
  }

  ngOnInit() {
  }
    
    ngAfterViewInit() {
       window.scrollTo(0, 0);
   }

}
