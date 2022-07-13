import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContctComponent } from './add-contct/add-contct.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';



@NgModule({
  declarations: [
    AddContctComponent,
    EditContactComponent,
    DeleteContactComponent,
    ListContactComponent,
    ViewContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
