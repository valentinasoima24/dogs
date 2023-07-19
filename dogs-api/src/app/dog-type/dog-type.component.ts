import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dog-type',
  templateUrl: './dog-type.component.html',
  styleUrls: ['./dog-type.component.css']
})
export class DogTypeComponent implements OnInit {
  dogImageUrl!: string;
  breed!: string;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const breed = params.get('breed');
      if (breed) {
        this.breed = breed;
        this.getDogImage(breed);
      }
    });
  }

  getDogImage(breed: string): void {
    const apiUrl = `https://dog.ceo/api/breed/${breed}/images/random`;

    this.http.get(apiUrl).subscribe((response: any) => {
      this.dogImageUrl = response.message;
    });
  }

}
