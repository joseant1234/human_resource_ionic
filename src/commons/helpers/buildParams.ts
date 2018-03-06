export function buildParams(validParams,body){

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

  console.log(body)
  return body
}
