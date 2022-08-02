class BasicMobile {
    constructor(brand, model, technology, announced, cameraAvailable, price) {
        this.brand = brand;
        this.model = model;
        this.technology = technology;
        this.announced = announced;
        this.cameraAvailable = cameraAvailable;
        this.price = price;
    }
    
    basicMobileInfo = () => `
        <h3>Specifications of ${this.brand} ${this.model}</h3>
        <dl>
            <dt>Network</dt>
            <dd><strong>Technology: </strong>${this.technology}</dd>
        </dl>
        <dl>
            <dt>Launch</dt>
            <dd><strong>Announcement: </strong>${this.announced}</dd>
        </dl>
        <dl>
            <dt>Camera</dt>
            <dd><strong>Availability: </strong>${this.cameraAvailable}</dd>
        </dl>
        <dl>
            <dt>Price</dt>
            <dd><strong>Price: </strong>${this.price}</dd>
        </dl>
    `
}