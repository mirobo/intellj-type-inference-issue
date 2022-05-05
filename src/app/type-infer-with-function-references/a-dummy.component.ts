import { Component } from '@angular/core';
import {
  data$,
  dataWithCustomPipeFunction1$,
  dataWithCustomPipeFunction2$,
  dataWithCustomPipeFunction3$,
  dataWithFilter$,
  dataWithFilterFunction$,
  dataWithFilterFunctionReference$,
  dataWithPipe$,
  dataWithPipeAndMap$
} from './a-dummy-facade';

@Component({
  selector: 'a-dummy-component[data]',
  templateUrl: 'a-dummy.component.html'
})
export class ADummyComponent {
  // data!: ADummyInterface;

  dataInferred$ = data$;
  dataWithPipe$ = dataWithPipe$;
  dataWithPipeAndMap$ = dataWithPipeAndMap$;
  dataWithCustomPipeFunction1$ = dataWithCustomPipeFunction1$;
  dataWithCustomPipeFunction2$ = dataWithCustomPipeFunction2$;
  dataWithCustomPipeFunction3$ = dataWithCustomPipeFunction3$;
  dataWithFilter$ = dataWithFilter$;
  dataWithFilterFunction$ = dataWithFilterFunction$;
  dataWithFilterFunctionReference$ = dataWithFilterFunctionReference$;
}
//
// interface A {
//   propA: string;
//   propB: string;
// }
