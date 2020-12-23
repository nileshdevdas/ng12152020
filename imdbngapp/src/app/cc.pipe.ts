import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cc'
})
export class CcPipe implements PipeTransform {

  /**
   * The transform method is designe to take the input 
   * and return the output in the same method so has 
   * 2 params 1:(value) the actual data that you wish transform
   *  and 2nd param the args which is the paramerst to the pipe 
   *  | data : 'format'  whatever follows after the : is the args
   * @param value 
   * @param args 
   */
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log("Got Value", value);
    console.log("Got Args ", args);
    if (args != null && args.length != 0) {
      let fromCurrency = args[0];
      let toCurrency = args[1];
      console.log("Converting from ", fromCurrency, " To Currency ", toCurrency);
    }

    // type conversion conver to number from anything 
    let newval: number = +value

    return newval * 73.92;
  }
}
