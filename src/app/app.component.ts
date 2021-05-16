import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-i18n-demo';

  supportedLanguages = ['en', 'de'];

  constructor(private translateServeice: TranslateService) {

    translateServeice.addLangs(this.supportedLanguages);
    translateServeice.setDefaultLang(this.supportedLanguages[0]);

    //const browserLanguage = translateServeice.getBrowserLang();
    //translateServeice.use(browserLanguage);

  }

}
