import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewbieComponent } from '../newbie/newbie.component';
import { FrontEndMentorComponent } from '../front-end-mentor.component';


const routes: Routes = [
  {
    path: '', component: FrontEndMentorComponent, children: [
      { path: 'newbie', component: NewbieComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FrontendMentorRoutesModule {



}
