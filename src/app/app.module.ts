import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

/* new form imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppraisalComponent } from './appraisal/appraisal.component';
import { NewAppraisalComponent } from './new-appraisal/new-appraisal.component';
import { ListAppraisalComponent } from './list-appraisal/list-appraisal.component';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { AppraisalDetailComponent } from './appraisal-detail/appraisal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppraisalComponent,
    NewAppraisalComponent,
    ListAppraisalComponent,
    UsersComponent,
    MenuComponent,
    AppraisalDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* configure app with AmplifyUIAngularModule */
    AmplifyUIAngularModule,
    /* configuring form modules */
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
