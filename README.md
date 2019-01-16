# Angular CLI Starter

This is a seed project that is added on top of Angular CLI.
Enhancements are the ff:

* Added recommended file structure from angular style guide
* Added widely used libraries (@angular/material / @angular/flex-layout)
* Added roboto font and material design icons

## Getting Started

### Prerequisites

* [Nodejs](https://nodejs.org/en/) - 8+
* [Angular CLI](https://cli.angular.io/) - 7+

### Installing

```
npm install
```
### Development Server

```
npm start
```

## Build

### Default Build
```
npm build
```
To follow further dev/qa/prod build configurations

## Additional Details

### File Structure
```
app
  -> core
  -> shared
  -> modules
assets  
  -> frontend stuff
styles
  -> custom.scss
  -> global.scss
environments (TODO)

core - stuff that should be instantiated only once (services)
shared - stuff shared between feature modules (i.e. components/models/directives)
modules - feature modules (i.e. registration) - should be standalone and doesn't have dependencies on other feature modules

global.scss - global css rules. i.e. .bold { font-weight: 700; }
custom.scss - override default ui component styles i.e. .mat-icon { font-size: .5em }
```

### Libraries
```
@angular/material       - UI components
@angular/flex-layout    - layout
material design icons   - icon set
ngx-datatable           - datatable
owl-datetimepicker      - date-time picker 
bass.css                - utilities (i.e. mr1 = margin-right: 5px;)
```

### Nice to have
These tips are not strictly required but act as more of a guideline in order to have the same code structure.

1. Space before and after bracket
  ```
  // *.ts
  import { Component } from '@angular/core'   // do 
  import {Component} from '@angular/core';    // don't

  // *.html
  <span> {{ user.name }}</span>   // do
  <span> {{user.name}}</span>     // don't
  ```

2. Use barrels
  ```
  // do
  import { HelloWorldService, FooBarService, JohnDoeService } from  '@app/core/services';

  // don't
  import { HelloWorldService } from  '@app/core/services/hello-world.service';
  import { FooBarService } from  '@app/core/services/foo-bar.service';
  import { JohnDoeService } from  '@app/core/services/john-doe.service';
  ```
3. Import order
 ```
  1. angular modules
  2. external modules
  3. app core/shared modules
  3. feature modules stuff

  // do
  import { Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
  import { Location } from "@angular/common";
  import { MatSnackBar,MatDialog } from '@angular/material';
  import { FormControl } from '@angular/forms';
  import { ActivatedRoute } from "@angular/router";

  import { TdDialogService } from "@covalent/core/dialogs";
  import { BehaviorSubject, Subscription, Observable } from "rxjs";
  import { map, startWith } from 'rxjs/operators';
  import { DatatableComponent, TableColumn } from "@swimlane/ngx-datatable";
  import { TdFileUploadComponent, TdLoadingService, TdMessageComponent } from "@covalent/core";
  import { DateTimeService } from "@app/modules/shared/services/date-time.service";

  import { ICanComponentDeactivate } from '@app/modules/shared/model/can-component-deactivate.model';
  import { DateTimeFormatPipe, DateFormatPipe } from '@app/modules/shared/format/date-format.pipe';
  import {  BulkUpdateComponent  } from '../bulk-update/bulk-update.component';
  import { PageLockService } from "@app/core/services";

  // don't
  import { Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
  import { Location } from "@angular/common";
  import { MatSnackBar,MatDialog } from '@angular/material';
  import { TdDialogService } from "@covalent/core/dialogs";
  import { DateTimeService } from "@app/modules/shared/services/date-time.service";
  import { TdFileUploadComponent, TdLoadingService, TdMessageComponent } from "@covalent/core";
  import { BehaviorSubject, Subscription, Observable } from "rxjs";
  import { map, startWith } from 'rxjs/operators';
  import { DatatableComponent, TableColumn } from "@swimlane/ngx-datatable";
  import { ICanComponentDeactivate } from '@app/modules/shared/model/can-component-deactivate.model';
  import { DateTimeFormatPipe, DateFormatPipe } from '@app/modules/shared/format/date-format.pipe';
  import {  BulkUpdateComponent  } from '../bulk-update/bulk-update.component';
  import { PageLockService } from "@app/core/services";
  import { FormControl } from '@angular/forms';
  import { ActivatedRoute } from "@angular/router";
 ```
 
 4. Overflow to first attribute on long html tags
 ```
 // do
 <div>
   <td-file-upload #singleFileUpload [(ngModel)]="files" (select)="upload()" [matTooltip]="newFileSelectMsg"
                   accept=".csv" (upload)="uploadClickEvent()" (cancel)="resetFile()" required>
     <div></div>
     <div></div>
 </div>                        

 // don't - hard to to spot next element
 <div>
   <td-file-upload #singleFileUpload [(ngModel)]="files" (select)="upload()" [matTooltip]="newFileSelectMsg"
     accept=".csv" (upload)="uploadClickEvent()" (cancel)="resetFile()" required>
     <div></div>
     <div></div>
 </div>

 // don't - consumes too much vertical space
 <div>
   <td-file-upload 
     #singleFileUpload 
     [(ngModel)]="files" 
     (select)="upload()" 
     [matTooltip]="newFileSelectMsg"
     accept=".csv" 
     (upload)="uploadClickEvent()" 
     (cancel)="resetFile()" required>
 </div>

 // exception - ngx-datatable
 ```
 
 5. Prefer Observables over Promises
 
 Why
   * Promises can't be cancelled
   * Observables have functional support
