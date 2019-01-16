import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SingletonService, SingletonService1 } from '@app/core/services';
import { School, Student } from '@app/shared/models';
import { SharedComponent, Shared1Component } from '@app/shared/components';
import { DATE_FORMAT, DATETIME_FORMAT, Direction } from '@app/shared/constants';
import { HelloWorldOnlyService } from '@app/modules/hello-world/services';

@Component({
  selector: 'app-hello-world-only',
  templateUrl: './hello-world-only.component.html',
  styleUrls: ['./hello-world-only.component.scss']
})
export class HelloWorldOnlyComponent implements OnInit, OnDestroy {
  private httpCalls: Subscription;

  constructor(private singletonService: SingletonService,
              private singletonService1: SingletonService1,
              private helloWorldOnlyService: HelloWorldOnlyService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    // this.httpCalls.unsubscribe();
  }

  getUser() {
    this.httpCalls = this.helloWorldOnlyService.getUser()
      .subscribe(user => console.log(user));
  }
}
