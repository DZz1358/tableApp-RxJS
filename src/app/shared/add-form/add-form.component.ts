import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  public country: string[] = this.peopleService.country

  myControl = new FormControl();
  filteredOptions!: Observable<string[]>;
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
    this.createOrEdit()
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.country.filter(option => option.toLowerCase().includes(filterValue));
  }

  createOrEdit() {
    const checkId = this.activatedRoute.snapshot.paramMap.get('id');
    if (checkId) {
      this.getUserById(checkId);
    }
  }

  getUserById(id: any) {
    this.peopleService.getIdUser(id).subscribe((data) => {
      this.addUserForm.patchValue(data);
    })
  }

  onSubmit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.peopleService.updateUser(this.addUserForm.value, id).subscribe(
        (data: any) => {
          this.router.navigate(['/list']);
        },
        (error: any) => console.log(error, 'err')
      );
    } else {
      this.peopleService.addUser(this.addUserForm.value).subscribe(
        (data: any) => {
          this.router.navigate(['/list']);
        },
        (error: any) => console.log(error, 'err')
      );
    }
  }
}


