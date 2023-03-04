

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

export interface steeperItome {
  name?: string;
  valid?: boolean;
  active?: boolean;
}

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {

  personalInfoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  @Output() update: any = new EventEmitter();
  @Input() stipes: steeperItome[] = [
    {
      name: 'personalInfo',
      valid: true,
      active: true
    },
    {
      name: 'coordonnee',
      valid: true,
      active: false
    },
    {
      name: 'educations',
      valid: true,
      active: false
    },
    {
      name: 'experiences',
      valid: true,
      active: false
    },
    {
      name: 'languges',
      valid: true,
      active: false
    },
    {
      name: 'skills',
      valid: true,
      active: false
    }
  ];



  ngOnInit() {
    this.personalInfoForm = this.formBuilder.group({
      personalInfo: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        niveanScolaires: ['']
      }),
      coordonnee: this.formBuilder.group({
        phone: [''],
        email: [''],
        ville: [''],
        pays: [''],
        address: [''],
      }),
      educations: this.formBuilder.array([]),
      experiences: this.formBuilder.array([]),
      languges: this.formBuilder.array([]),
      skills: this.formBuilder.array([])
    });

    this.addpersonalInfo(0);
    this.addCoordonnee(1);
    this.addExperience(2);
    this.addEducations(4);
    this.addlanguges(4);
    this.addskills(5);
  }

  get experiences() {
    return this.personalInfoForm.get('experiences') as FormArray;
  }
  get educations() {
    return this.personalInfoForm.get('educations') as FormArray;
  }
  get languges() {
    return this.personalInfoForm.get('languges') as FormArray;
  }

  get skills() {
    return this.personalInfoForm.get('skills') as FormArray;
  }

  addpersonalInfo(i: any, a?: any) {
    let valid = true;
    if (valid) {
      this.stipes[i].valid = true;
      this.update.emit(this.stipes)

    }
  }
  addCoordonnee(i: any, a?: any) {

    let valid = true
    if (valid) {
      this.stipes[i].valid = true;
      this.update.emit(this.stipes)
    }
  }
  addExperience(i: any, a?: any) {

    let experience = this.formBuilder.group({
      dataStart: [a?.dataStart || ''],
      dataEnd: [a?.dataEnd || ''],
      jobTitle: [a?.jobTitle || ''],
      company: [a?.company || ''],
    })
    this.experiences.push(experience);
    let valid = true
    if (valid) {
      this.stipes[i].valid = true;
      this.update.emit(this.stipes)
    }
  }

  addEducations(i: any, a?: any) {
    let educations = this.formBuilder.group({
      dataStart: [a?.dataStart || ''],
      dataEnd: [a?.dataEnd || ''],
      filde: [a?.filde || ''],
      school: [a?.school || ''],
    })
    this.educations.push(educations);

    let valid = true
    if (valid) {
      this.stipes[i].valid = true;
      this.update.emit(this.stipes)
    }
  }

  addlanguges(i: any, a?: any) {

    let languges = this.formBuilder.group({
      languge: [a?.languge || ''],
      langugeLevel: [a?.langugeLevel || ''],

    })
    this.languges.push(languges);


    let valid = true
    if (valid) {
      this.stipes[i].valid = true;
      this.update.emit(this.stipes)
    }
  }

  addskills(i: any, a?: any) {

    let skills = this.formBuilder.group({
      skillName: [a?.skillName || ''],
      skillLevel: [a?.skillLevel || ''],

    })
    this.skills.push(skills);


    let valid = true
    if (valid) {
      this.stipes[i].valid = true;
      this.update.emit(this.stipes)
    }
  }



  pre(a: number) {
    if (a > 0) {
      if (this.stipes[a - 1].valid) {
        this.stipes.map((o: any, i: any) => {
          if (i != (a - 1))
            o.active = false;
          else
            o.active = true;
        })
        
    
        this.update.emit(this.stipes)
      }
    }
  }

  next(a: number) {
    if (a < this.stipes.length) {
      if (this.stipes[a + 1].valid) {
        this.stipes.map((o: any, i: any) => {
          if (i != (a + 1))
            o.active = false;
          else
            o.active = true;
          
        })
        this.update.emit(this.stipes)
      }
    }
  }






  // submitStipe(i: any, a?: any) {
  //     let valid = true
  //     if (valid) {
  //       this.stipes[i].valid = true;
  //  this.update.emit(this.stipes)
  //     }
  //   }

}









