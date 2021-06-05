import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //You can access the data either by this method
    // this.errorMessage = this.route.snapshot.data['message'];
    //Or by this method.
    this.route.data.subscribe(
      (data:Data) =>{
        this.errorMessage = data['message'];
      }
    )
  }

}
