import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @Input() formName: string;

  // TODO in the hours form, need to update the open and closing based on the weekday selected?

  // TODO allow the user to change the type of an Item?

  // TODO convert the type of an item from a character to a more user-friendly string


  days = [
    {label: 'Sunday', value: 'Sunday'},
    {label: 'Monday', value: 'Monday'},
    {label: 'Tuesday', value: 'Tuesday'},
    {label: 'Wednesday', value: 'Wednesday'},
    {label: 'Thursday', value: 'Thursday'},
    {label: 'Friday', value: 'Friday'},
    {label: 'Saturday', value: 'Saturday'}
  ];

  states = [
    {label: 'California', value: 'CA'},
    {label: 'Massachussets', value: 'MA'},
    {label: 'Florida', value: 'FL'},
    {label: 'New York', value: 'NY'},
    {label: 'Pennsylvania', value: 'PA'},
    {label: 'District of Columbia', value: 'The District of Columbia'},
    {label: 'Texas', value: 'TX'}
  ];

  displayedForm: FormGroup;

  forms = {

    bars: this.fb.group({
      name: [''],
      license: [''],
      phone: [''],
        addr: [''],
        city: [''],
        state: [''],
        zip: [''],
      tax: ['']
    }),

    beers: this.fb.group({
      name: [''],
      manf: ['']
    }),

    drinkers: this.fb.group({
      name: [''],
      phone: [''],
        addr: [''],
        city: [''],
        state: [''],
        zip: ['']
    }),

    foods: this.fb.group({
      name: [''],
    }),

    frequents: this.fb.group({
      drinker: [''],
      bar: ['']
    }),

    hours: this.fb.group({
      bar: [''],
      weekday: [''],
      opening: [''],
      closing: ['']
    }),

    includes: this.fb.group({
      tid: [''],
      bar: [''],
      item: [''],
      quantity: ['']
    }),

    items: this.fb.group({
      name: [''],
      type: ['']
    }),

    likes: this.fb.group({
      drinker: [''],
      item: ['']
    }),

    sells: this.fb.group({
      bar: [''],
      item: [''],
      price: ['']
    }),

    softdrinks: this.fb.group({
      name: [''],
      manf: ['']
    }),

    transactions: this.fb.group({
      tid: [''],
      bar: [''],
      amountPaid: [''],
      drinker: [''],
      date: [''], // The date and time should be combined before the form is submitted
      time: [''],
      tip: ['']
    })

  };

  setDisplayedForm(tableName: string, data: any) {
    this.forms[tableName].setValue(data);
  }

  constructor(private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit() {

  }

}
