import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../../../services/users/users.service';
import { UserRequest } from '../../../models/requests/user.request';
import { ActivatedRoute, Router } from '@angular/router';
import { UserResponse } from '../../../models/responses/user.response';

@Component({
  selector: 'app-add-edit-user',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-edit-user.component.html',
  styleUrl: './add-edit-user.component.scss',
  providers: [
    UsersService
  ]
})
export class AddEditUserComponent implements OnInit {
  form: FormGroup;
  private userService = inject(UsersService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  id: number = 0;
  user: WritableSignal<UserResponse> = signal(null);
  loading: boolean = false;

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl<string | null>(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
      edad: new FormControl<number | null>(null, [Validators.required, Validators.min(0), Validators.max(1000)])
    });
    this.activatedRoute.params.subscribe((data) => {
      if (data['id']) {
        this.id = data['id'];
        this.getUser(this.id);
      }
    });
  }

  getUser(id: number) {
    this.loading = true
    this.userService.getUser(id).subscribe({
      next: (data) => {
        this.user.set(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.pathValues();
      }
    })
  }

  pathValues() {
    this.form.patchValue({
      nombre: this.user().name,
      email: this.user().email,
      edad: this.user().edad
    });
    this.loading = false;
  }


  save() {
    let user: UserRequest = {
      name: this.form.get('nombre').value,
      email: this.form.get('email').value,
      edad: this.form.get('edad').value
    }

    if (this.id === 0) {
      this.userService.addUser(user).subscribe({
        next: (data) => {},
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.router.navigate(['/users']);
        }
      });
    } else {
      this.userService.updateUser(user, this.id).subscribe({
        next: (data) => {},
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.router.navigate(['/users']);
        }
      });
    }

  }
}
