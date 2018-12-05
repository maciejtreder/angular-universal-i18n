import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, Observer } from 'rxjs';
import { readFileSync } from 'fs';

export function universalLoader(): TranslateLoader {
    return {
        getTranslation: (lang: string) => {
            return Observable.create((observer: Observer<any>) => {
                observer.next(JSON.parse(readFileSync(`./dist/browser/assets/i18n/${lang}.json`, 'utf8')));
                observer.complete();
            });
        }
    } as TranslateLoader;
}

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({appId: 'app-root'}),
        AppModule,
        ServerModule,
        NoopAnimationsModule,
        ModuleMapLoaderModule,
        ServerTransferStateModule,
        TranslateModule.forRoot({
            loader: {provide: TranslateLoader, useFactory: universalLoader}
        })
    ]
})
export class AppServerModule {}
