import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators} from '@angular/forms';
import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {

  movieForm : FormGroup;

  constructor(private formBuilder : FormBuilder){

    this.movieForm = this.formBuilder.group({

      login : this.formBuilder.group
      ({ identifiant : (""),
        titre : (""),}),

      typeForm : this.formBuilder.group
      ({ film:(""),
        serie:(""),
        episode:(""),}),

      year: (""),

      ficheForm: this.formBuilder.group
      ({ courte:(""),
      longue:("") }),


  })


};







  }


//   constructor(private formBuilder: FormBuilder) {
//     this.movieForm = this.formBuilder.group({

//       login : new FormGroup({

//         }),




//   })
// }