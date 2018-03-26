export function buildParams(body){
  // [{attr: 'languges', prefix: 'employee', suffix: '_attributes'}]

  // validParams.forEach(param => {
  //   for(let attr in body){
  //     if(param.attr == body[attr]){
  //       let attribute_key = param.prefix + attr + param.suffix
  //       body[attribute_key] = {}
  //       body[attribute_key] = body[attr]
  //       delete body[attr]
  //     }
  //   }
  // }

    // if(Object.prototype.hasOwnProperty.call(body,attr))
  // })


  // for(let attr in body){
	//   if(Array.isArray(body[attr])){
  //     let attribute_key = attr + "_attributes"
  //     body[attribute_key] = {}
  //     body[attribute_key][0] = body[attr]
  //     delete body[attr]
  //   }
  // }

  //  let keys = Object.keys(body);
  //  keys.map((key)=>{
  //   if(!Array.isArray(body[key])) employee_params[key] = body[key]
  // });

  let valid_languages_params = ['id','language','level','_destroy'];
  let valid_certifications_params = ['id','certification','date','_destroy'];
  let valid_interests_params = ['id','interest','_destroy'];
  let valid_soft_skills_params = ['id','soft_skill','_destroy'];
  let valid_projects_params = ['id','title','role','start_date','end_date','_destroy'];
  let valid_responsabilities_params = ['id','responsability','_destroy']
  let valid_skills_params = ['id','skill_id','_destroy'];

  let employee_params = {}

  employee_params["first_name"] = body.first_name
  employee_params["last_name"] = body.last_name
  employee_params["team_id"] = body.team_id
  employee_params["position"] = body.position
  employee_params["degree"] = body.degree
  employee_params["level"] = body.level

  if(body.employee_languages){
    employee_params["employee_languages_attributes"] = {}
    body.employee_languages.map((language,index)=>{
      employee_params["employee_languages_attributes"][index] = {}
      valid_languages_params.forEach(attr =>{
        if(Object.prototype.hasOwnProperty.call(language.attributes,attr)){
          employee_params["employee_languages_attributes"][index][attr] = language.attributes[attr];
        }
      });
    });
  }

  if(body.employee_certifications){
    employee_params["employee_certifications_attributes"] = {}
    body.employee_certifications.map((certification,index)=>{
      employee_params["employee_certifications_attributes"][index] = {}
      valid_certifications_params.forEach(attr => {
        if(Object.prototype.hasOwnProperty.call(certification.attributes,attr)){
          employee_params["employee_certifications_attributes"][index][attr] = certification.attributes[attr];
        }
      })
    });
  }

  if(body.employee_interests){
    employee_params["employee_interests_attributes"] = {}
    body.employee_interests.map((interest,index)=>{
      employee_params["employee_interests_attributes"][index] = {}
      valid_interests_params.forEach(attr => {
        if(Object.prototype.hasOwnProperty.call(interest.attributes,attr)){
          employee_params["employee_interests_attributes"][index][attr] = interest.attributes[attr];
        }
      })
    });
  }

  if(body.employee_soft_skills){
    employee_params["employee_soft_skills_attributes"] = {}
    body.employee_soft_skills.map((soft_skill,index)=>{
      employee_params["employee_soft_skills_attributes"][index] = {}
      valid_soft_skills_params.forEach(attr => {
        if(Object.prototype.hasOwnProperty.call(soft_skill.attributes,attr)){
          employee_params["employee_soft_skills_attributes"][index][attr] = soft_skill.attributes[attr];
        }
      })
    });
  }

  if(body.employee_projects){
    employee_params["employee_projects_attributes"] = {}
    body.employee_projects.map((project,index)=>{
      employee_params["employee_projects_attributes"][index] = {}
      valid_projects_params.forEach(attr => {
        if(Object.prototype.hasOwnProperty.call(project.attributes,attr)){
          employee_params["employee_projects_attributes"][index][attr] = project.attributes[attr];
        }
      });
      if(project.employee_project_responsabilities){
        employee_params["employee_projects_attributes"][index]["employee_project_responsabilities_attributes"] = {}
        project.employee_project_responsabilities.map((responsability,responsability_index)=>{
          employee_params["employee_projects_attributes"][index]["employee_project_responsabilities_attributes"][responsability_index] = {}
          valid_responsabilities_params.forEach(responsability_attr => {
            if(Object.prototype.hasOwnProperty.call(responsability.attributes,responsability_attr)){
              employee_params["employee_projects_attributes"][index]["employee_project_responsabilities_attributes"][responsability_index][responsability_attr] = responsability.attributes[responsability_attr];
            }
          });
        });
      }
      if(project.employee_project_skills.length > 0){
        employee_params["employee_projects_attributes"][index]["employee_project_skills_attributes"] = {}
        project.employee_project_skills.map((employee_skill,employee_skill_index)=>{
          employee_params["employee_projects_attributes"][index]["employee_project_skills_attributes"][employee_skill_index] = {}
          valid_skills_params.forEach(skill_attr => {
            if(Object.prototype.hasOwnProperty.call(employee_skill.attributes,skill_attr)){
              employee_params["employee_projects_attributes"][index]["employee_project_skills_attributes"][employee_skill_index][skill_attr] = employee_skill.attributes[skill_attr];
            }
          });
        });
      }
    });
  }

  return employee_params
}
