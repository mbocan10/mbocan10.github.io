function Car(make, model, year, color, price) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;

    this.display = function() {
        return `
            <div class="card">
                <h3>${this.year} ${this.make} ${this.model}</h3>
                <p>Color: ${this.color}</p>
                <p>Price: $${this.price}</p>
            </div>
        `;
    };
}

let cars = [
    new Car("Toyota", "Camry", 2022, "Black", 25000),
    new Car("Honda", "Civic", 2021, "Blue", 22000),
    new Car("Ford", "Mustang", 2023, "Red", 35000),
    new Car("Tesla", "Model 3", 2022, "White", 40000),
    new Car("Chevrolet", "Malibu", 2020, "Gray", 20000)
];

let output = document.getElementById("output");

for (let i = 0; i < cars.length; i++) {
    output.innerHTML += cars[i].display();
}