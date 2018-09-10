// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { UsernameComponent } from '@app/username/username.component';
// import { SegmentationComponent } from '@app/segmentation/segmentation.component';
// import { EditPageComponent } from '@app/edit-page/edit-page.component';
// import { PasswordComponent } from '@app/password/password.component';
// import { EmailComponent } from '@app/email/email.component';
// import { EmailPasswordComponent } from '@app/email-password/email-password.component';

// export const appRoutes: Routes = [
//   // 1st step Route
//   { path: 'segmentation',  component: SegmentationComponent },
//   // 2nd step Route default
//   { path: 'editpage',  component: EditPageComponent},
//   // 2nd step Route substeps
//   { path: 'editpage/:editstep',  component: EditPageComponent},
//   // 3rd step Route
//   { path: 'username',  component: UsernameComponent},
//   // 4th step Route
//   { path: 'password',  component: PasswordComponent },
//   // 5th step Route
//   { path: 'email',  component: EmailComponent },
  
//   { path: 'email-password',  component: EmailPasswordComponent },
//   // Default
//   { path: '', component: SegmentationComponent },
//   // catch unmatched
//   { path: '**', redirectTo: '/segmentation', pathMatch: 'full' },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule { }
