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
        <dt>CPU</dt>
            <dd><strong>CPU: </strong>${this.cpu}</dd>
        <dt>Camera Resolution</dt>
            <dd><strong>Camera Resolution: </strong>${this.cameraResolution}</dd>
        <dt>Blutooth Availability</dt>
            <dd><strong>Blutooth Availability: </strong>${this.blutoothAvailable}</dd>
        </dl>
    `
}