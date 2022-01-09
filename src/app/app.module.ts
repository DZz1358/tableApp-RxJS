import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { TableComponent } from './shared/table/table.component';
import { BtnComponent } from './shared/btn/btn.component';
import { AddFormComponent } from './shared/add-form/add-form.component';
import { MatButtonModule } from '@angular/material/button';
import { AddToListComponent } from './shared/add-to-list/add-to-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const appRoutes: Routes = [
  { path: '', component: TableComponent },
  { path: 'list', component: TableComponent },
  { path: 'add', component: AddFormComponent },
  { path: 'add/:id', component: AddFormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    BtnComponent,
    AddFormComponent,
    AddToListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
