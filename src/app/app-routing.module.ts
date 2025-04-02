import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionDetailsComponent } from './components/missiondetails/missiondetails.component';
import { MissionListComponent } from './components/missionlist/missionlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'missions', pathMatch: 'full' },
  { path: 'missions', component: MissionListComponent },
  { path: 'missions/:id', component: MissionDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
