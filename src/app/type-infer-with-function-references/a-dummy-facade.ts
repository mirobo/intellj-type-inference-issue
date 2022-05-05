import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { filter } from 'rxjs/operators';

export interface ADummyInterface {
  propA: string;
  propB: string;
}

export const data$ = aDummyObservable();
export const dataWithPipe$ = aDummyObservable().pipe();
export const dataWithPipeAndMap$ = aDummyObservable().pipe(
  map((val) => {
    return {
      propA: val.propA + 'x'
    };
  })
);

export const dataWithFilter$ = aDummyObservable().pipe(filter((v) => v === undefined));
export const dataWithFilterFunction$ = aDummyObservable().pipe(filter((v) => inputIsNotNullOrUndefined(v)));
export const dataWithFilterFunctionReference$ = aDummyObservable().pipe(filter(inputIsNotNullOrUndefined));

export const dataWithCustomPipeFunction1$ = aDummyObservable().pipe(isNotNullOrUndefined1());
export const dataWithCustomPipeFunction2$ = aDummyObservable().pipe(isNotNullOrUndefined2());
export const dataWithCustomPipeFunction3$ = isNotNullOrUndefined3(aDummyObservable());

export function aDummyObservable(): Observable<ADummyInterface> {
  const mocked: ADummyInterface = { propA: 'a', propB: 'b' };
  return of(mocked);
}

export function inputIsNotNullOrUndefined<T>(input: null | undefined | T): input is T {
  return input !== null && input !== undefined;
}

export function isNotNullOrUndefined1<T>() {
  return (source$: Observable<null | undefined | T>) => source$.pipe(filter(inputIsNotNullOrUndefined));
}

export function isNotNullOrUndefined2<T>() {
  return (source$: Observable<null | undefined | T>) => source$.pipe(filter((v) => inputIsNotNullOrUndefined(v)));
}

export function isNotNullOrUndefined3<T>(source$: Observable<null | undefined | T>) {
  return source$.pipe(filter((v) => inputIsNotNullOrUndefined(v)));
}
