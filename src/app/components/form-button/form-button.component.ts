import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {
  @Input() valid: boolean;
  @Output() continuar = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.continuar.emit();
  }

}
