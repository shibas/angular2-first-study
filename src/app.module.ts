import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './component/app.component';
import {MenuModule} from './modules/menu.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MenuModule,
        MaterialModule.forRoot(),
        FormsModule
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {
    constructor(appRef: ApplicationRef) {
        appRef.bootstrap(AppComponent);
    }
}

