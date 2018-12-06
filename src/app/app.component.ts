import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SwUpdate } from "@angular/service-worker"

@Component({
  selector: 'trm-contacts-app',
  template: `
    <mat-toolbar color="primary">Contacts</mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent {

  constructor(private matSnackBar: MatSnackBar, private swUpdate: SwUpdate) {
    this.swUpdate.available.subscribe(() => {
      this.matSnackBar.open("updated", "Reload")
      document.location.reload()
    })
  }
}
