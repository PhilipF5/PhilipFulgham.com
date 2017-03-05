import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

    bio;
    skills;
    work;

    constructor(private themeService: ThemeService) { }

    ngOnInit() {
        
    }

}
