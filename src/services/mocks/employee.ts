export const EMPLOYEE =
{
    "data": {
        "type": "employees",
        "id": 1,
        "attributes": {
            "id": 1,
            "first_name": "Nombre1",
            "last_name": "Apellido1",
            "position": "developer",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            "photo_file_name": null,
            "photo_content_type": null,
            "photo_file_size": null,
            "photo_updated_at": null,
            "college": "San Ignacio de Loyola University",
            "degree": "Software Engineer",
            "team_id": 1,
            "created_at": "2018-02-27T23:05:58.000Z",
            "updated_at": "2018-02-27T23:05:58.000Z",
            "resume_file_name": null,
            "resume_content_type": null,
            "resume_file_size": null,
            "resume_updated_at": null,
            "photo": null,
            "resume": null
        },
        "relationships": {
            "employee_interests": [
                {
                    "type": "employee_interests",
                    "id": 1,
                    "attributes": {
                        "id": 1,
                        "employee_id": 1,
                        "interest": "Patters and Design",
                        "created_at": "2018-02-27T23:05:58.000Z",
                        "updated_at": "2018-02-27T23:05:58.000Z"
                    }
                },
                {
                    "type": "employee_interests",
                    "id": 2,
                    "attributes": {
                        "id": 2,
                        "employee_id": 1,
                        "interest": "High Performance",
                        "created_at": "2018-02-27T23:05:58.000Z",
                        "updated_at": "2018-02-27T23:05:58.000Z"
                    }
                },
                {
                    "type": "employee_interests",
                    "id": 3,
                    "attributes": {
                        "id": 3,
                        "employee_id": 1,
                        "interest": "Apps",
                        "created_at": "2018-02-27T23:05:58.000Z",
                        "updated_at": "2018-02-27T23:05:58.000Z"
                    }
                }
            ],
            "employee_certifications": [
                {
                    "type": "employee_certifications",
                    "id": 1,
                    "attributes": {
                        "id": 1,
                        "employee_id": 1,
                        "certification": "Scrum",
                        "date": "2018-02-27",
                        "created_at": "2018-02-27T23:05:58.000Z",
                        "updated_at": "2018-02-27T23:05:58.000Z"
                    }
                }
            ],
            "employee_languages": [
                {
                    "type": "employee_languages",
                    "id": 1,
                    "attributes": {
                        "id": 1,
                        "language": "English",
                        "level": "Advanced",
                        "employee_id": 1,
                        "created_at": "2018-02-27T23:05:58.000Z",
                        "updated_at": "2018-02-27T23:05:58.000Z"
                    }
                }
            ],
            "employee_soft_skills": [
                {
                    "type": "employee_soft_skills",
                    "id": 1,
                    "attributes": {
                        "id": 1,
                        "employee_id": 1,
                        "soft_skill": "Leadership",
                        "created_at": "2018-02-27T23:05:58.000Z",
                        "updated_at": "2018-02-27T23:05:58.000Z"
                    }
                },
                {
                    "type": "employee_soft_skills",
                    "id": 2,
                    "attributes": {
                        "id": 2,
                        "employee_id": 1,
                        "soft_skill": "Languages",
                        "created_at": "2018-02-27T23:05:58.000Z",
                        "updated_at": "2018-02-27T23:05:58.000Z"
                    }
                }
            ],
            "employee_skills": [
                {
                    "type": "employee_skills",
                    "id": 1,
                    "attributes": {
                        "id": 1,
                        "employee_id": 1,
                        "created_at": "2018-02-27T23:05:59.000Z",
                        "updated_at": "2018-02-27T23:05:59.000Z",
                        "skill_id": 1
                    }
                },
                {
                    "type": "employee_skills",
                    "id": 2,
                    "attributes": {
                        "id": 2,
                        "employee_id": 1,
                        "created_at": "2018-02-27T23:05:59.000Z",
                        "updated_at": "2018-02-27T23:05:59.000Z",
                        "skill_id": 2
                    }
                }
            ],
            "team": {
                "type": "teams",
                "id": 1,
                "attributes": {
                    "id": 1,
                    "name": "Fullstack",
                    "created_at": "2018-02-27T23:05:58.000Z",
                    "updated_at": "2018-02-27T23:05:58.000Z"
                }
            },
            "employee_projects": [
                {
                    "type": "employee_projects",
                    "id": 1,
                    "attributes": {
                        "id": 1,
                        "employee_id": 1,
                        "start_date": "2018-02-27",
                        "end_date": null,
                        "title": "Project1",
                        "role": "Developer",
                        "created_at": "2018-02-27T23:05:59.000Z",
                        "updated_at": "2018-02-27T23:05:59.000Z"
                    },
                    "employee_project_responsabilities": [
                        {
                            "type": "employee_project_responsabilities",
                            "id": 1,
                            "attributes": {
                                "id": 1,
                                "employee_project_id": 1,
                                "responsability": "Create backlog",
                                "created_at": "2018-02-27T23:05:59.000Z",
                                "updated_at": "2018-02-27T23:05:59.000Z"
                            }
                        },
                        {
                            "type": "employee_project_responsabilities",
                            "id": 2,
                            "attributes": {
                                "id": 2,
                                "employee_project_id": 1,
                                "responsability": "Update trello",
                                "created_at": "2018-02-27T23:05:59.000Z",
                                "updated_at": "2018-02-27T23:05:59.000Z"
                            }
                        }
                    ],
                    "employee_project_skills": [
                        {
                            "type": "employee_project_skills",
                            "id": 1,
                            "attributes": {
                                "id": 1,
                                "employee_project_id": 1,
                                "created_at": "2018-02-27T23:05:59.000Z",
                                "updated_at": "2018-02-27T23:05:59.000Z",
                                "skill_id": 1
                            },
                            "skill": {
                                "type": "skills",
                                "id": 1,
                                "attributes": {
                                    "id": 1,
                                    "name": "React",
                                    "created_at": "2018-02-27T23:05:59.000Z",
                                    "updated_at": "2018-02-27T23:05:59.000Z"
                                }
                            }
                        },
                        {
                            "type": "employee_project_skills",
                            "id": 2,
                            "attributes": {
                                "id": 2,
                                "employee_project_id": 1,
                                "created_at": "2018-02-27T23:05:59.000Z",
                                "updated_at": "2018-02-27T23:05:59.000Z",
                                "skill_id": 2
                            },
                            "skill": {
                                "type": "skills",
                                "id": 2,
                                "attributes": {
                                    "id": 2,
                                    "name": "Angular",
                                    "created_at": "2018-02-27T23:05:59.000Z",
                                    "updated_at": "2018-02-27T23:05:59.000Z"
                                }
                            }
                        }
                    ]
                },
                {
                    "type": "employee_projects",
                    "id": 2,
                    "attributes": {
                        "id": 2,
                        "employee_id": 1,
                        "start_date": "2018-02-27",
                        "end_date": "2018-02-27",
                        "title": "Project2",
                        "role": "Developer",
                        "created_at": "2018-02-27T23:05:59.000Z",
                        "updated_at": "2018-02-27T23:05:59.000Z"
                    },
                    "employee_project_responsabilities": [
                        {
                            "type": "employee_project_responsabilities",
                            "id": 3,
                            "attributes": {
                                "id": 3,
                                "employee_project_id": 2,
                                "responsability": "Review",
                                "created_at": "2018-02-27T23:05:59.000Z",
                                "updated_at": "2018-02-27T23:05:59.000Z"
                            }
                        }
                    ],
                    "employee_project_skills": [
                        {
                            "type": "employee_project_skills",
                            "id": 3,
                            "attributes": {
                                "id": 3,
                                "employee_project_id": 2,
                                "created_at": "2018-02-27T23:05:59.000Z",
                                "updated_at": "2018-02-27T23:05:59.000Z",
                                "skill_id": 3
                            },
                            "skill": {
                                "type": "skills",
                                "id": 3,
                                "attributes": {
                                    "id": 3,
                                    "name": "Python",
                                    "created_at": "2018-02-27T23:05:59.000Z",
                                    "updated_at": "2018-02-27T23:05:59.000Z"
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }
}
