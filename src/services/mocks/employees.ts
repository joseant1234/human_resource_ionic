export const EMPLOYEES = [
  {id: 1, first_name: "Nombre1", last_name: "Apellido1",position: "developer", team_id: "1",
    languages: [
      {id: 1, language: "English", level: 'Advanced'}
    ],
    projects: [
      {id: 1, title: 'Project name demo', start_date: '2017-12-12', end_date: '2017-12-29',
      responsabilities:[
        {id: 1, responsability: 'Hacer la interfaz'},
        {id: 2, responsability: 'Hacer el deploy'}
      ],
      employee_skills: [
        {id: 1, skill_id: 1,
          skill:{id: 1, name: 'React'}
        },
        {id: 2, skill_id: 2,
          skill:{id: 2, name: 'Angular'}
        }
      ]
      }
    ]
  },
  {id: 2,first_name: "Nombre2", last_name: "Apellido2", position: "developer", team_id: "2",
    languages: [
      {id: 1, language: "English", level: 'Advanced'}
    ],
    projects: [
      {id: 1, title: 'Project name demo', start_date: '2017-12-12', end_date: '2017-12-29',
      responsabilities:[
        {id: 1, responsability: 'Hacer la interfaz'},
        {id: 2, responsability: 'Hacer el deploy'}
      ],
      employee_skills: [
        {id: 1, skill_id: 1,
          skill:{id: 1, name: 'React'}
        },
        {id: 2, skill_id: 2,
          skill:{id: 2, name: 'Angular'}
        }
      ]
      }
    ]
  }
]
