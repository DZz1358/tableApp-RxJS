import { PEOPLE } from './../../mocks/peoples.mock';
import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  people = PEOPLE;


  addUserForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email,
    Validators.required]),
    gender: new FormControl('', Validators.required)
  });

  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.addId()

  }

  onSubmit() {
    this.peopleService.addPeople(this.addUserForm.value);
    this.router.navigate(['/list']);
  }

  addId() {
    let last = this.people[this.people.length - 1]
    console.log(last.id);
  }
}
