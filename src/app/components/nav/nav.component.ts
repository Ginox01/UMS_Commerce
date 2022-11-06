import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Output('send-open-form') onOpenForm = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  openForm() {
    this.onOpenForm.emit();
  }
}
