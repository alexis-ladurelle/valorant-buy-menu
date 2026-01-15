import { Agent } from './Agent';
import { AbilityType } from '../enums/AlibityType';


export class Ability {
    private _agent: Agent;
    private _id: string;
    private _name: string;
    private _description: string;
    private _type: AbilityType;
    private _cost: number;
    private _maxCharges: number;

    constructor(agent: Agent, id: string, name: string, description: string, type: AbilityType, cost: number, maxCharges: number) {
        this._agent = agent;
        this._id = id;
        this._name = name;
        this._description = description;
        this._type = type;
        this._cost = cost;
        this._maxCharges = maxCharges;
    }

    get agent(): Agent {
        return this._agent;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get type(): AbilityType {
        return this._type;
    }

    get cost(): number {
        return this._cost;
    }

    get maxCharges(): number {
        return this._maxCharges;
    }

}