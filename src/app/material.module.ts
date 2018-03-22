
import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';

@NgModule({

  imports: [
    MatButtonModule,
     MatFormFieldModule,
      MatInputModule,
       MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
     MatInputModule,
      MatSnackBarModule
  ]

})
export class MaterialModule {

}
