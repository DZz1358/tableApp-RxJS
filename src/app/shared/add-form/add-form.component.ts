import { PeopleService } from './../../services/people.service';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  user: any;

  people = this.peopleService.getPeople();

  addUserForm = new FormGroup({
    name: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    id: new FormControl(),
    date: new FormControl(new Date()),
  });

  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.peopleService.getIdUser(userId).subscribe((data) => {
      this.addUserForm.patchValue(data);
    })
  }


  onSubmit() {
    this.peopleService.addUser(this.addUserForm.value).subscribe(
      (data: any) => {
        this.router.navigate(['/list']);

      },
      (error: any) => console.log(error, 'err')
    );
  }
}


