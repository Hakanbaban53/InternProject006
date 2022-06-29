import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-solition',
  templateUrl: './solition.component.html',
  styleUrls: ['./solition.component.scss']
})
export class SolitionComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['tr', 'en']);
    translate.setDefaultLang('tr');
  }
  
  switchLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
  }

}
