import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { MessageListComponent } from './message-list/message-list.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { ThreadsService } from './services/threads.service';

@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    MessageSectionComponent,
    ThreadSectionComponent,
    MessageListComponent,
    ThreadListComponent
  ],
  providers: [
    ThreadsService
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
