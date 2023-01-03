import { IllnessService } from './../../../../shared/services/illness/illness.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-illnesses',
  templateUrl: './illnesses.component.html',
  styleUrls: ['./illnesses.component.scss'],
})
export class IllnessesComponent implements OnInit {
  public form: FormGroup;

  // generate list of illness separeted by first letter
  public illnesses: Array<any> = [
    {
      id: 1,
      name: 'Asthma',
    },  
    {
      id: 2,
      name: 'Cancer',
    },
    {
      id: 3,
      name: 'Diabetes',
    },
    {
      id: 4,
      name: 'Epilepsy',
    },
    {
      id: 5,
      name: 'Fibromyalgia',
    },
    {
      id: 6,
      name: 'Gout',
    },
    {
      id: 7,
      name: 'Hypertension',
    },
    {
      id: 8,
      name: 'Influenza',
    },
    {
      id: 9,
      name: 'Jaundice',
    },
    {
      id: 10,
      name: 'Kidney Stones',
    },
    {
      id: 11,
      name: 'Lupus',
    },
    {
      id: 12,
      name: 'Malaria',
    },
    {
      id: 13,
      name: 'Nephritis',
    },
    {
      id: 14,
      name: 'Obesity',
    },
    {
      id: 15,
      name: 'Pneumonia',
    },
    {
      id: 16,
      name: 'Quinsy',
    },
    {
      id: 17,
      name: 'Rheumatism',
    },
    {
      id: 18,
      name: 'Scurvy',
    },
    {
      id: 19,
      name: 'Tuberculosis',
    },
    {
      id: 20,
      name: 'Ulcer',
    },
    {
      id: 21,
      name: 'Varicose Veins',
    },
    {
      id: 22,
      name: 'Warts',
    },
    {
      id: 23,
      name: 'Xeroderma',
    },
    {
      id: 24,
      name: 'Yellow Fever',
    },
    {
      id: 25,
      name: 'Zoster',
    },
    {
      id: 26,
      name: 'Acne',
    },
    {
      id: 27,
      name: 'Bronchitis',
    },
    {
      id: 28,
      name:'Arthritis',
    },
    {
      id: 29,
      name: 'AIDS',
    },
    {
      id: 30,
      name: 'Alzheimer\'s',
    },
    {
      id: 31,
      name: 'Anemia',
    },
    {
      id: 32,
      name: 'Appendicitis',
    },
    {
      id: 33,
      name: 'Asthma',
    },
    {
      id: 34,
      name: 'Bipolar Disorder',
    },
    {
      id: 35,
      name: 'Cancer',
    },




  ];

  constructor(private illnessService: IllnessService) {
  }
  
  ngOnInit(): void {
    this.initializeForm();
    this.getIllnesses();
  }

  public initializeForm(): void {
    this.form = new FormGroup({
      cid: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    });
  }

  getIllnesses(): void {
    this.illnessService.getAllIlnesses().subscribe((data) => {
      this.illnesses = data;
    });
  }

  
}
