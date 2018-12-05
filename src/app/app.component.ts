import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angulari18n';

  constructor(private translate: TranslateService) {}

  public ngOnInit(): void {
    this.setDefaultTranslation();
  }

  private setDefaultTranslation(): void {
    if (['en', 'es', 'zh', 'ru'].indexOf(this.translate.getBrowserLang()) > -1) {
      this.translate.setDefaultLang(this.translate.getBrowserLang());
    } else {
      this.translate.setDefaultLang('en');
    }
  }

  public switchLanguage(lang: string): void {
    this.translate.setDefaultLang(lang);
  }
}
