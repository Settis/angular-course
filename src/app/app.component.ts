import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import 'whatwg-fetch';
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private searchSubject: Subject<string> = new Subject();
  ngOnInit(): void {

    this.searchSubject = new Subject();

    this.searchSubject.debounceTime(300).switchMap((searchTerm: string) => Observable
      .fromPromise(fetch(`https://api.github.com/search/repositories?q=${searchTerm}`)
        .then((res: Body) => res.json())))
      .subscribe((res: Responce): void => {
        this.totalCount = res.total_count;
        this.searchResult = res.items;
      })

  }
  public searchResult: Repo[];
  public totalCount: number;

  public search(request: string): void {
    this.searchSubject.next(request)
  }

}
