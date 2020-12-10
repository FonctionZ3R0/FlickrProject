import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchpage',
  templateUrl: './switchpage.component.html',
  styleUrls: ['./switchpage.component.css']
})
export class SwitchpageComponent implements OnInit {

  @Input() page: number;
  constructor() { }

  ngOnInit(): void {
  }

}