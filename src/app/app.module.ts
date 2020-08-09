import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppRoutingModule }                 from './app-routing.module';
import { AppComponent }                     from './app.component';
import { LoginPageComponent }               from './components/login-page/login-page.component';
import { TermCondDialogComponent }          from './components/term-cond-dialog/term-cond-dialog.component';
import { NgbModule }                        from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { MatFormFieldModule }               from '@angular/material/form-field';
import { MatInputModule }                   from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule }                    from "@angular/material/icon";
import { MatButtonModule }                  from "@angular/material/button";
import { MatCheckboxModule }                from "@angular/material/checkbox";
import { FontAwesomeModule }                from '@fortawesome/angular-fontawesome';
import { MatTabsModule }                    from "@angular/material/tabs";
import { MatDatepickerModule }              from "@angular/material/datepicker";
import { MatNativeDateModule }              from "@angular/material/core";
import { MatDialogModule }                  from "@angular/material/dialog";
import { SocialAuthButtonsComponent } from './components/social-auth-buttons/social-auth-buttons.component';

@NgModule(
  {
    declarations: [
      AppComponent,
      LoginPageComponent,
      TermCondDialogComponent,
      SocialAuthButtonsComponent
    ],
    imports:      [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      MatIconModule,
      MatButtonModule,
      MatCheckboxModule,
      FontAwesomeModule,
      MatTabsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatDialogModule
    ],
    providers:    [],
    bootstrap:    [AppComponent]
  }
)
export class AppModule {
}
