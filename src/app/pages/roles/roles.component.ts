import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {

  role: RoleRequest = new RoleRequest();

  save(form: NgForm) {
    console.log(form.form);
  }

}

class RoleRequest {
  name: string;
  shortname: string;
}
