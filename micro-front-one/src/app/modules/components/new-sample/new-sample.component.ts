import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-sample',
  templateUrl: './new-sample.component.html',
  styleUrls: ['./new-sample.component.scss']
})
export class NewSampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("##NewSampleComponent *******************")
  }

}
