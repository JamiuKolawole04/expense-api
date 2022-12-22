import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, map } from 'rxjs';

export class CustomInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log('THIS IS INTERCEPTING REQUEST');

    console.log({ context });

    return next.handle().pipe(
      map((data) => {
        console.log('THIS IS INTERCEPTING RESPONSE');
        console.log({ data });

        const response = {
          ...data,
          createdAt: data.created_At,
        };

        delete response.updated_At;
        delete response.created_At;

        return response;
      }),
    );
  }
}
