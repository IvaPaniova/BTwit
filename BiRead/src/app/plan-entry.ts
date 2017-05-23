export class PlanEntry {

    constructor(public key: number, public value: string) {};

    getKey() {
        return this.key;
    }
    getValue() {
        return this.value;
    }
}

