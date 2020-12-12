import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomeValidation } from 'src/app/Shared/Validations/validationrule';
import { PostService } from 'src/app/posts/post.service';

@Component({
  selector: 'app-create-inncident',
  templateUrl: './create-inncident.component.html',
  styleUrls: ['./create-inncident.component.sass'],
})
export class CreateInncidentComponent implements OnInit {
  incidentForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService) {
    this.createForm();
  }

  ngOnInit(): void {}

  private createForm() {
    this.incidentForm = this.fb.group({
      subject: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          CustomeValidation.subjectValidation(),
        ],
        [CustomeValidation.uniqueEmail(this.postService)],
      ],
      id: [],
      sendTo: [],
      description: [''],
      address: this.fb.array([
        this.fb.group({
          city: [''],
          street: [''],
        }),
      ]),
    });
  }

  get Address() {
    return this.incidentForm.get('address') as FormArray;
  }

  save() {
    alert(JSON.stringify(this.incidentForm.value));
  }

  addNewAddress() {
    let groupName = this.fb.group({
      city: [''],
      street: [''],
    });
    this.Address.push(groupName);
  }

  get subject(): FormControl {
    return this.incidentForm.get('subject') as FormControl;
  }
}
