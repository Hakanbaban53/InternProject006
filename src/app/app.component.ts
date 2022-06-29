import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InternProject006';
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['tr', 'en']);
    translate.setDefaultLang('tr');
  }
}
