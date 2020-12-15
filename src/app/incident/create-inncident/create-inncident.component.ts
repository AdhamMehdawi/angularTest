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
import { ValidationBase } from 'src/app/Shared/Validations/ValidationBase';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-create-inncident',
  templateUrl: './create-inncident.component.html',
  styleUrls: ['./create-inncident.component.sass'],
})
export class CreateInncidentComponent implements OnInit {
  incidentForm: FormGroup;
  validationBase: ValidationBase;
  categories;
  constructor(private fb: FormBuilder, private postService: PostService,private sharedData: SharedDataService) {
    this.createForm();
  }

  ngOnInit(): void {

    this.sharedData.getLookupsByType([1]).subscribe(res=>{
      console.log(res);
      this.categories = res.result;
    });

    let roles = [
      { id: 1, name: 'test', description: '' },
      { id: 1, name: 'test' },
      { id: 1, name: 'test' },
    ];

    // localStorage.setItem('roles', JSON.stringify(roles));

    // let rolesItems = JSON.parse(localStorage.getItem("roles"));
    // this.incidentForm.get('subject').setValue(roles[0].name);
    // this.incidentForm.get('id').setValue(roles[0].id);
    // this.incidentForm.get('description').setValue(roles[0].description);

    // this.validationBase.patchForm(this.incidentForm, roles);
  }

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
          city: '',
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

  get description(): FormControl {
    return this.incidentForm.get('description') as FormControl;
  }
}
