import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppModule } from '../app.module';

export function createHomeTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (createHomeTranslateLoader),
          deps: [HttpClient]
        },        
      }
    )
  ],
  exports: [
    HomeComponent
  ]
})
export class LandingPageModule { }
