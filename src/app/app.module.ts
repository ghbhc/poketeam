
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule} from '@angular/material/grid-list';


import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { TeamMgrComponent } from './team-mgr/team-mgr.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { TypeChartComponent } from './type-chart/type-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TeamMemberComponent,
    TeamMgrComponent,
    TypeChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
