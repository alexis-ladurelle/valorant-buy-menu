import { AgentRole } from '../enums/AgentRole';
import { Ability } from './Ability';

export class Agent {

    private _id: string;
    private _name: string;
    private _role: AgentRole;
    private _description: string;
    private _iconImage: string;
    private _portraitImage: string;
    private _abilities: Ability[];

    constructor(id: string, name: string, role: AgentRole, description: string, iconImage: string, portraitImage: string, abilities: Ability[]) {
        this._id = id;
        this._name = name;
        this._role = role;
        this._description = description;
        this._iconImage = iconImage;
        this._portraitImage = portraitImage;
        this._abilities = abilities;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get role(): AgentRole {
        return this._role;
    }

    get description(): string {
        return this._description;
    }

    get iconImage(): string {
        return this._iconImage;
    }

    get portraitImage(): string {
        return this._portraitImage;
    }

    get abilities(): Ability[] {
        return this._abilities;
    }

}