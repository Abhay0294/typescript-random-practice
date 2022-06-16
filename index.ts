// Import stylesheets
import './style.css';

class Parent {
  constructor() {
    console.log('Control in parent constructor');
  }

  calc(num1: number, num2: number): number {
    console.log('control in parent calc');
    return num1 + num2;
  }

  success(): void {
    console.log('You have succefully completed this modeule');
  }
}

class Child extends Parent {
  //Here we are overriding the parent's calc function
  calc(num1: number, num2: number): number {
    super.calc(num1, num2); //Here we're calling parent's calc function
    console.log('Constrol in child calc');
    return num1 * num2;
  }
  //Here we're adding custom method for the child class
  customChildMethod(): string {
    return 'Hello';
  }
}

const newChild = new Child();
console.log(newChild.calc(2, 3));

/**
 * Don't call super in extended class just for the sole purpose to call parent's constructor.
 * By default parent's class constructor will be called
 * Three things to remember wile extending base class methods:
 * 1. Method name should be same
 * 2.Parameters type should be same.
 * 3. return type should be same as that of base class.
 * If only want to call base class method, with no modification then do super.<methodName> and
 * store that in a variable to view the return type of the function.
 */

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>See the logs for this project</h1>`;
