import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import 'whatwg-fetch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    Observable
      .fromEvent(document.querySelector('#search'), 'keydown')
      .debounceTime(300)
      .map((event: KeyboardEvent) => (event.target as HTMLInputElement).value)
      .switchMap((searchTerm: string) => Observable
        .fromPromise(fetch(`https://api.github.com/search/repositories?q=${searchTerm}`).then(res=>res.json())))
        .subscribe(res => {
          this.totalCount = res.total_count;
          this.searchResult = res.items;
        })
  }
  public searchResult: Repo[];
  public totalCount: number;

}
