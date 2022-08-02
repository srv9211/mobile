class IntermediateMobile extends BasicMobile {
    constructor(brand, model, technology, announced, cameraAvailable, price, os, cpu, cameraResolution, blutoothAvailable){
        super(brand, model, technology, announced, cameraAvailable, price);
        this.os = os;
        this.cpu = cpu;
        this.cameraResolution = cameraResolution;
        this.blutoothAvailable = blutoothAvailable;
    }
    intermediateMobileInfo = () => this.basicMobileInfo() + `
        <dl>
            <dt>Operating System: </dt>
            <dd><strong>OS: </strong>${this.os}</dd>
        </dl>
        <dl>
        <dt>CPU</dt>
            <dd><strong>CPU: </strong>${this.cpu}</dd>
        </dl>
        <dl>
            <dt>Camera Resolution</dt>
            <dd><strong>Resolution: </strong>${this.cameraResolution}</dd>
        </dl>
        <dl>
            <dt>Blutooth Availability</dt>
            <dd><strong>Availability: </strong>${this.blutoothAvailable}</dd>
        </dl>
    `
}