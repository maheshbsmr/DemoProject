import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummyComponent } from './conn/dummy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserRegisterComponent } from './register/user-register.component';
import {MatButtonModule,MatToolbarModule,MatCardModule,
  MatNativeDateModule,MatDatepickerModule,MatIconModule,MatRadioModule,MatListModule, MatCheckboxModule
} from  '@angular/material';
import { CommonUIComponent } from './UI/common-ui.component';
//import { Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { HttpClientModule } from '@angular/common/http';

//import {MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,} from  '@angular/material';


const routes:Routes=[
  
  { path: '', redirectTo: '/', pathMatch: 'full' },

{ path:'register', component:UserRegisterComponent },
{path:'login',component:LoginComponent}
  
];
@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    UserRegisterComponent,
    CommonUIComponent,
    LoginComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatRadioModule,
    MatListModule,
    HttpClientModule,

    MatCheckboxModule,
    [RouterModule.forRoot(routes)],
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
