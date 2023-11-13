import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { UsersService } from '../../services/users/users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserResponse } from '../../models/responses/user.response';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    TopbarComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers: [
    UsersService
  ]
})
export class UsersComponent implements OnInit {

  private userService = inject(UsersService);
  users: WritableSignal<UserResponse[]> = signal([]);
  loading: boolean = false;

  ngOnInit(): void {
    this.getUsers();
  }

  searchUser(event: string) {
    this.getUsers(event);
  }

  getUsers(query?: string) {
    this.loading = true;
    this.userService.getUsers(query).subscribe({
      next: (data) => {
        this.users.set(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.loading = false;
      }
    });

    // Forma antigua de subscripcion
    // this.userService.getUsers().subscribe((data) => {
    //   console.log(data);
    // }, (err) => {
    //   console.log(err);
    // }, () => {
    //   console.log('Completado');
    // });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: (data) => {},
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.getUsers();
      }
    })
  }

}
