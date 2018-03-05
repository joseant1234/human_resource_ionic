import { Languages } from './languages';

export interface Employees{
	id: number;
	first_name: string;
	last_name: string;
	position: string;
	team_id: number;
	languages: Languages[];
}
