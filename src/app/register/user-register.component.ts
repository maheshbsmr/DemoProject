import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { user } from '../conn/user';
import { UserService } from './user.service';

//import { UserService } from '../conn/uerService/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public regiForm:FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder, private Service:UserService ) { }

  ngOnInit() {
  
    // this.formModel=this.formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lname: ['', Validators.required],
    //   address: ['', Validators.required],
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    // });

    // To initialize FormGroup  
    this.regiForm = this.formBuilder.group({  
      'FirstName' : [null, Validators.required],  
      'LastName' : [null, Validators.required],  
      'Address' : [null, Validators.required],  
       'email': ['', Validators.required],
      'password': ['', Validators.required],
       //'Address' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],  
      // 'DOB' : [null, Validators.required],  
      // 'Gender':[null, Validators.required],  
      // 'Blog':[null, Validators.required],  
      // 'Email':[null, Validators.compose([Validators.required,Validators.email])],  
      // 'IsAccepted':[null]  
    });  
    
  }
  

  public hasError = (controlName: string, errorName: string) =>{
    return this.regiForm.controls[controlName].hasError(errorName);
  }
  get f() { return this.regiForm.controls; }
//   onSubmit() {
//     this.submitted = true;
//     let article = this.formModel.value;

//         // stop here if form is invalid
//         alert("1")
//      //this.Service.createArticle.subscribe(statusCode => {
//       //Expecting success code 201 from server
     
//       //this.Service.createArticle(article)
//      // .subscribe(statusCode => {
//         //Expecting success code 201 from server
//        // this.statusCode = statusCode;
//         //this.getAllArticles();
//        // this.backToCreateArticle();
//      // },
//        // errorCode => this.statusCode = errorCode
//       //);
//  // });
     
    

//   }

  onFormSubmit()  
  {  
    let article = this.regiForm.value;
     this.Service.createArticle(article);
    console.log(article);  
  }  
 
}
