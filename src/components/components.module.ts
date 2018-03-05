import { NgModule } from '@angular/core';
import { FilterComponent } from './filter/filter';
import { SkillSelectComponent } from './skill-select/skill-select';
@NgModule({
	declarations: [FilterComponent,
    SkillSelectComponent],
	imports: [],
	exports: [FilterComponent,
    SkillSelectComponent]
})
export class ComponentsModule {}
