import {Rule} from './rule.model'
export interface Project {
    id: number;
    name: string;
    description: string;
    rules: Rule[] // Array<Rule>
}
