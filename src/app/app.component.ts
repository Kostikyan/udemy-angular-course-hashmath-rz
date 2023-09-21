import {Component, OnInit} from '@angular/core';
import {observable, Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {

    const obsTest$ = new Observable(observable => {

      observable.next("Return From Observable");
      observable.next("Return From Observable 2");
      setTimeout(() => {
        observable.next('from timeout')
      }, 2000)
      observable.next("Return From Observable 3");

    }).subscribe(value => {
      console.log(value);
    });

    obsTest$.unsubscribe();

    const obsTest = function () {
      return "printed from function";

    }

    let s = obsTest();
    console.log(s);

  }

  onSubmit() {
    // this.router.navigate(['/posts']);
    // this.router.navigate(['/post', 1, 'Post Title']);
    this.router.navigate(['/posts'],{queryParams: {page: 1, orderBy: 'newest'}});
  }

  protected readonly onsubmit = onsubmit;
}
