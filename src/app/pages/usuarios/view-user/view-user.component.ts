import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  private activatedRoute = inject(ActivatedRoute); // Angular 16+
  id: number;
  info: string;
  extra: string;

  //constructor(private activatedRoute: ActivatedRoute) { } // Angular 16-

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.id = data['id'];
    });
    this.activatedRoute.queryParams.subscribe(data => {
      this.info = data['info'];
      this.extra = data['extra'];
    });
  }
}
