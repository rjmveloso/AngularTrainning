import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-start-filters',
  templateUrl: './start-filters.component.html',
  styleUrls: ['./start-filters.component.scss']
})
export class StartFiltersComponent implements OnInit {

  filters: FormGroup;

  constructor(fb: FormBuilder) {
    this.filters = fb.group({
      title: ['']
    });
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.filters.value);
  }

}
