import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent implements OnInit {

  formContact: FormGroup
  userActived:string = "Pedro"

  constructor(private form: FormBuilder){
    this.formContact = this.form.group({
      name:["", [Validators.required, Validators.minLength(3)]],
      email: ["",[Validators.required, Validators.email]] 
    })
  }

  ngOnInit(): void {
    this.formContact.get("name")?.setValue(this.userActived)
    this.formContact.get("name")?.disable()
  }

  hasErrors(controlName:string, errorType:string){
    return this.formContact.get(controlName)?.hasError(errorType) && this.formContact.get(controlName)?.touched
  }

  enviar(){
    console.log(this.formContact.value);
  } 
  
}
