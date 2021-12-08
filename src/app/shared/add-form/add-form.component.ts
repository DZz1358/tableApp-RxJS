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


  addUserForm = new FormGroup({
    name: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    id: new FormControl(),
    date: new FormControl(),
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
