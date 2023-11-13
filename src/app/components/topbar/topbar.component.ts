import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  query: string = '';

  @Input({ required: true }) routerLinkAdd: string;
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() onTextChange: EventEmitter<string> = new EventEmitter<string>();


  searchOnClick() {
    this.onClick.emit(this.query);
  }

  searchOnChange() {
    if (this.query.length >= 3) {
      this.onTextChange.emit(this.query);
    } else {
      this.onTextChange.emit(null);
    }
  }
}
