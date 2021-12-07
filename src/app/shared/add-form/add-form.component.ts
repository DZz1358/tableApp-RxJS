import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  people = this.peopleService.getPeople();
  lastItemId = this.people[this.people.length - 1].id;


  addUserForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email,
    Validators.required]),
    gender: new FormControl('', Validators.required),
    id: new FormControl(++this.lastItemId)
  });

  constructor(
    private peopleService: PeopleService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.peopleService.addPeople(this.addUserForm.value);
    this.router.navigate(['/list']);
  }

}
