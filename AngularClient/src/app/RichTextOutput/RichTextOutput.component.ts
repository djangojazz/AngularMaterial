import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-RichTextOutput',
  templateUrl: './RichTextOutput.component.html',
  styleUrls: ['./RichTextOutput.component.css']
})
export class RichTextOutputComponent implements OnInit {
    formEntry = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        dateOfBirth: new FormControl('')
    });

    constructor() { }

    ngOnInit() {
    }

    submit(): void {
        const firstName = this.formEntry.get('firstName')?.value;
        const lastName = this.formEntry.get('lastName')?.value;
        console.log('hello', [firstName, lastName]);
    }
}
