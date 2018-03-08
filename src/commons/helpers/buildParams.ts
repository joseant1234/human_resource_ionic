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

  let valid_languages_params = ['id','language','level','_destroy'];
  let valid_certifications_params = ['id','certification','date','_destroy'];
  let valid_interests_params = ['id','interest','_destroy'];
  let valid_soft_skills_params = ['id','soft_skill','_destroy'];

  let employee_params = {}
 //  let keys = Object.keys(body);
 //  keys.map((key)=>{
 //   if(!Array.isArray(body[key])) employee_params[key] = body[key]
 // });

  employee_params["first_name"] = body.first_name
  employee_params["last_name"] = body.last_name
  employee_params["team_id"] = body.team_id
  employee_params["position"] = body.position

  employee_params["employee_languages_attributes"] = {}
  body.employee_languages.map((language,index)=>{
    employee_params["employee_languages_attributes"][index] = {}
    valid_languages_params.forEach(attr =>{
      if(Object.prototype.hasOwnProperty.call(language.attributes,attr)){
        employee_params["employee_languages_attributes"][index][attr] = language.attributes[attr];
      }
        // employee_params["employee_languages_attributes"][index][attr] = language.attributes[attr];
    });

    // employee_params["employee_languages_attributes"][index] = {}
    // employee_params["employee_languages_attributes"][index] = language.attributes
    // employee_params["employee_languages_attributes"][index]["id"] = language.attributes.id
    // employee_params["employee_languages_attributes"][index]["language"] = language.attributes.language
    // employee_params["employee_languages_attributes"][index]["level"] = language.attributes.level
    // if(language.attributes._destroy) employee_params["employee_languages_attributes"][index]["_destroy"] = language.attributes._destroy
  });

  employee_params["employee_certifications_attributes"] = {}
  body.employee_certifications.map((certification,index)=>{
    employee_params["employee_certifications_attributes"][index] = {}
    valid_certifications_params.forEach(attr => {
      if(Object.prototype.hasOwnProperty.call(certification.attributes,attr)){
        employee_params["employee_certifications_attributes"][index][attr] = certification.attributes[attr];
      }
    })
  });

  employee_params["employee_interests_attributes"] = {}
  body.employee_interests.map((interest,index)=>{
    employee_params["employee_interests_attributes"][index] = {}
    valid_interests_params.forEach(attr => {
      if(Object.prototype.hasOwnProperty.call(interest.attributes,attr)){
        employee_params["employee_interests_attributes"][index][attr] = interest.attributes[attr];
      }
    })
  });

  employee_params["employee_soft_skills_attributes"] = {}
  body.employee_soft_skills.map((soft_skill,index)=>{
    employee_params["employee_soft_skills_attributes"][index] = {}
    valid_soft_skills_params.forEach(attr => {
      if(Object.prototype.hasOwnProperty.call(soft_skill.attributes,attr)){
        employee_params["employee_soft_skills_attributes"][index][attr] = soft_skill.attributes[attr];
      }
    })
  });

  employee_params["employee_projects_attributes"] = {}
  body.employee_projects.map((project,index)=>{
    employee_params["employee_projects_attributes"][index] = {}
    employee_params["employee_projects_attributes"][index]["id"] = project.attributes.id
    employee_params["employee_projects_attributes"][index]["title"] = project.attributes.title
    employee_params["employee_projects_attributes"][index]["start_at"] = project.attributes.start_at
    employee_params["employee_projects_attributes"][index]["end_at"] = project.attributes.end_at
    if(project.attributes._destroy) employee_params["employee_projects_attributes"][index]["_destroy"] = project.attributes._destroy
    employee_params["employee_projects_attributes"][index]["employee_project_responsabilities"] = project.employee_project_responsabilities
  });




  return employee_params
}
