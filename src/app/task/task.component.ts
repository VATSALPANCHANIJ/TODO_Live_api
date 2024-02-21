import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

  }
}
