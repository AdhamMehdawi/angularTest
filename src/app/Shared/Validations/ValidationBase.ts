import { FormControl, FormGroup } from "@angular/forms";

export class ValidationBase {
  defualtDate = new Date("0001-01-01T00:00:00");
  defualtDate2 = new Date("0001-01-01");

  public getErrorMessage(field: FormControl) {
    const key = Object.keys(field.errors)[0];
    let message = "";
    switch (key) {
      case "required":
        message = "من فضلك الحقل إجباري";
        break;
      case "shouldBeUnique":
        message = "المدخل موجود مسبقا";
        break;

      case "minlength":
        message =
          "الحقل يجب ان يكون على الأقل من " +
          field.errors.minlength.requiredLength +
          (field.errors.minlength.requiredLength === 2
            ? " حرفين"
            : field.errors.minlength.requiredLength > 10
            ? " حرف"
            : " أحرف");
        break;
      case "min":
        message =
          "0 يجب ان تكون القيمة المدخلة أكبر من " ;
        break;

      case "maxlength":
        message =
          "الحقل يجب ان لا يزيد عن " +
          field.errors.maxlength.requiredLength +
          (field.errors.maxlength.requiredLength === 2
            ? " حرفين"
            : field.errors.maxlength.requiredLength > 10
            ? " حرف"
            : " أحرف");
        break;

      case "email":
        message = "الرجاء إدخال بريد إلكتروني صالح";
        break;

      case "custome":
        message = "خطأ يرجى تصحيح المدخلات";
        break;
      case "plasticCountMaxValidator":
        message = "يجب ان لا يزيد عدد البلاستيك عن الكمية";
        break;
      default:
        break;
    }
    return message;
  }



  
  public hasErrors(field: FormControl) {
    return (field.touched || field.dirty) && field.invalid;
  }

  public isValid(field: FormControl) {
    return field.touched && field.dirty && field.valid;
  }

  public isValidDate(dateString) {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    return dateString.match(regEx) != null;
  }
  public patchForm(form: FormGroup, data): FormGroup {
    const keys = Object.keys(form.value);
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      let value = data[key];
      if (value === "0001-01-01T00:00:00" || value === "01/01/0001") {
        value = "";
      }
      // tslint:disable-next-line:max-line-length
      //   const dateFormat = /^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])T(00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/g;
      //  if (dateFormat.test(value)) {
      if (
        typeof value === "string" &&
        value.length > 9 &&
        new Date(value).toString() !== "Invalid Date" &&
        new Date(value) !== this.defualtDate &&
        new Date(value) !== this.defualtDate2
      ) {
        value = new Date(value);
      }
      // }
      if (key != null && value != null) {
        form.get(key).setValue(value);
      }
    }
    return form;
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        control.controls.forEach(c => this.markFormGroupTouched(c));
      }
    });
  }

  public markFormTouchedAndDirty(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      control.markAsDirty();
      if (control.controls) {
        control.controls.forEach(c => {
          this.markFormTouchedAndDirty(c);
        });
      }
    });
  }
}
