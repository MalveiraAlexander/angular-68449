import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  genres: string[] = ['Hombre', 'Mujer', 'Otro'];

  form: FormGroup<UserForm>;
  formArray: FormArray;
  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);

      if (this.id && this.id != 0) {
        this.patchValue();
      }
    });
  }

  patchValue() {
    let date: string = new Date().toLocaleString();
    date = date.split(',')[0];
    console.log(date);

    let user: UserResponse = {
      id: 1,
      firstname: 'Pepe',
      lastname: 'Menganito',
      genre: 'Hombre',
      date,
      email: 'algo@algo.com',
      othergenre: null
    };

    this.form.patchValue({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      genre: user.genre,
      date: user.date,
      othergenre: user.othergenre
    });
  }

  save() {
    console.log('FORM', this.form);
    let user: UserRequest = {
      firstname: this.form.get('firstname').value,
      lastname: this.form.get('lastname').value,
      email: this.form.get('email').value,
      genre: this.form.get('genre').value,
      othergenre: this.form.get('othergenre').value,
      date: this.form.get('date').value
    }
    console.log(user);
    console.log(this.formArray);

    // let user1: UserRequest = this.form.value;
    // console.log(user1);

  }

  changeGenre(event: any) {
    if (event.target.value === 'Otro') {
      this.form.get('othergenre').enable();
    } else {
      this.form.get('othergenre').disable();
    }
  }


  createForm() {
    this.form = new FormGroup<UserForm>({
      firstname: new FormControl<string>(null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      lastname: new FormControl<string>(null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      email: new FormControl<string>(null, [Validators.required, Validators.email]),
      date: new FormControl<string>(null, [Validators.required]),
      genre: new FormControl<string>(null, [Validators.required]),
      othergenre: new FormControl<string>(null, [Validators.minLength(1), Validators.maxLength(50)]),
    });
    this.form.get('othergenre').disable();
    this.formArray = new FormArray([this.form, this.form, this.form]);
  }
}

interface UserForm {
  firstname: FormControl<string>;
  lastname: FormControl<string>;
  email: FormControl<string>;
  date: FormControl<string>;
  genre: FormControl<string>;
  othergenre: FormControl<string>;
}

interface UserRequest {
  firstname: string;
  lastname: string;
  email: string;
  date: string;
  genre: string;
  othergenre: string;
}

interface UserResponse {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  date: string;
  genre: string;
  othergenre: string;
}
