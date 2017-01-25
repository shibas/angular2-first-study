import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {NgModule, ApplicationRef} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './component/app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        FormsModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor(appRef: ApplicationRef) {
        appRef.bootstrap(AppComponent);
    }
}
