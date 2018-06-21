import { NgModule } from '@angular/core';
import { FilterComponent } from './filter/filter';
import { SkillSelectComponent } from './skill-select/skill-select';
import { TabGeneralComponent } from './tab-general/tab-general';
import { TabEducationsComponent } from './tab-educations/tab-educations';
import { TabProjectsComponent } from './tab-projects/tab-projects';
@NgModule({
	declarations: [FilterComponent,
    SkillSelectComponent,
    TabGeneralComponent,
    TabEducationsComponent,
    TabProjectsComponent],
	imports: [],
	exports: [FilterComponent,
    SkillSelectComponent,
    TabGeneralComponent,
    TabEducationsComponent,
    TabProjectsComponent]
})
export class ComponentsModule {}
