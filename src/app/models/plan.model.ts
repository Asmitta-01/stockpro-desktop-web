export class Plan {
    id: number;
    name: string;
    description: string;
    price: number;
    benefits: string[];

    constructor(id: number, name: string, description: string, price: number, benefits: string[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.benefits = benefits;
    }
}