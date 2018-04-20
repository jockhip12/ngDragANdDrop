import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule} from 'ng2-dragula';
import {DndModule} from 'ng2-dnd';


import { AppComponent } from './app.component';
import { Sample } from './sample/sample.component';
import { AnotherSample } from './another-sample/another-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    Sample,
    AnotherSample
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, Sample, AnotherSample]
})
export class AppModule { }
