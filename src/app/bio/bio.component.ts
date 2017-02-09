import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.less']
})
export class BioComponent implements OnInit {
    
    favoriteGames = ["Dishonored", "Minecraft", "Assassin's Creed", "The Elder Scrolls", "Batman: Arkham"];
    
favoriteShows = ["Doctor Who", "The Flash", "Gotham", "The Big Bang Theory"];

  constructor(private themeService: ThemeService) { }
    
public show(list) {
    //document.getElementById(list).style.display = "block";
}
    
public hide(list) {
    //setTimeout(function() { document.getElementById(list).style.display = "none"; }, 500);
}

  ngOnInit() {
  }
    
    ngAfterViewInit() {
       window.scrollTo(0, 0);
   }

}
