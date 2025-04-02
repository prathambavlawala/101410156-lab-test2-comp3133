import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionListComponent implements OnInit {
resetAndReturn() {
throw new Error('Method not implemented.');
}
  launches: Launch[] = [];
  filteredLaunches: Launch[] = [];
  year: string = '';
  launchSuccess: string = '';
  landingSuccess: string = '';

  constructor(private spacexService: SpacexService, private router: Router) {}

  ngOnInit(): void {
    this.spacexService.getAllLaunches().subscribe(data => {
      this.launches = data;
      this.filteredLaunches = [...data];
    });
  }

  applyFilters(): void {
    this.filteredLaunches = this.launches.filter(launch => {
      const matchYear = this.year ? launch.launch_year === this.year : true;
      const matchLaunch = this.launchSuccess ? 
        (this.launchSuccess === 'true' ? launch.launch_success : !launch.launch_success) : true;
      const matchLanding = this.landingSuccess && launch.rocket?.first_stage?.cores?.length ? 
        (this.landingSuccess === 'true' ? launch.rocket.first_stage.cores[0].land_success : !launch.rocket.first_stage.cores[0].land_success) : true;
      return matchYear && matchLaunch && matchLanding;
    });
  }

  resetFilters(): void {
    this.year = '';
    this.launchSuccess = '';
    this.landingSuccess = '';
    this.filteredLaunches = [...this.launches];
  }

  goToDetails(flightNumber: number): void {
    this.router.navigate(['/missions', flightNumber]);
  }
}
