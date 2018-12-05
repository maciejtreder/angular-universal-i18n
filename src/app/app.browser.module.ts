import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
       return new TranslateHttpLoader(http);
}

@NgModule({
       bootstrap: [AppComponent],
       imports: [
              BrowserModule.withServerTransition({appId: 'app-root'}),
              AppModule,
              HttpClientModule,
              TranslateModule.forRoot({
                     loader: {provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient]}
              })
       ]
})
export class AppBrowserModule {}
