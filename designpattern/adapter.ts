interface Iphone {
  useLightning()
}

interface Google {
  useMicroUSB()
}

class iPhone6 implements Iphone {
  useLightning(){
    console.log('use type C');
  }
}

class googlePixel implements Google {
  useMicroUSB(){
    console.log('use micro USB');
  }
}

//implement Adapter
class ConvertLightningToUSB implements Google{
  iphoneDevice: Iphone

  constructor(iphone:Iphone){
    this.iphoneDevice =iphone
  }

  public useMicroUSB() {
    console.log('Converting...');
    this.iphoneDevice.useLightning()
  }
}

//create instance
let iphoneInstance = new iPhone6()
let emergencyAdapter = new ConvertLightningToUSB(iphoneInstance)

emergencyAdapter.useMicroUSB()