import { Component } from '@angular/core';
import { ProjectTitleComponent } from './project-title/project-title.component';
import { RuleListComponent } from './rule-list/rule-list.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ProjectTitleComponent,RuleListComponent,ProgressBarComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

}
