import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch.model';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissionDetailsComponent implements OnInit {
  mission?: Launch;

  constructor(
    private route: ActivatedRoute,
    private spacexService: SpacexService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.spacexService.getLaunchById(id).subscribe(data => {
      this.mission = data;
    });
  }

  goBack(): void {
    this.router.navigate(['/missions']);
  }
}
