import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from './API.service';
import { Car } from '../types/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'amplify-angular-app';
  public createForm: FormGroup;

  /* declare cars variable */
  cars: Array<Car>;

  constructor(private api: APIService, private fb: FormBuilder) { }

  async ngOnInit() {
    this.createForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'patent': ['', Validators.required]
    });

    /* fetch cars when app loads */
    this.api.ListCars().then(event => {
      this.cars = event.items;
    });

    /* subscribe to new cars being created */
    this.api.OnCreateCarListener.subscribe( (event: any) => {
      const newCar = event.value.data.onCreateCar;
      this.cars = [newCar, ...this.cars];
    });

  } 

  public onCreate(car: Car) {
    this.api.CreateCar(car).then(event => {
      console.log('item created!');
      this.createForm.reset();
    })
    .catch(e => {
      console.log('error creating car...', e);
    });
  }
}