import { AbstractControl, ValidatorFn } from '@angular/forms';
import { PostService } from 'src/app/posts/post.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class CustomeValidation {
  static subjectValidation(): ValidatorFn {
    return (control: AbstractControl): any | null => {
      if (control.value === 'test') {
        return { noTestallowed: true };
      }
      return null;
    };
  }

  static uniqueEmail(postService: PostService) {
    return (control: AbstractControl): any | null => {
      // return Observable.(c=>{ // })
      return postService.checkEmail(control.value).pipe(
        map((c) => {
            alert(c);
          if (c == true) {
            return { unique: true };
          }
          return null;
        }) );
    };
  }
}
