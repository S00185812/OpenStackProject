import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit,Input } from '@angular/core';
import { AmazonCpusResponse } from '../../../../model/AmazonCpuResponse';
import { UserItem } from '../../../../model/user-Item';
import { AmazonApiService } from '../../../../Services/amazon-api.service';
import { UserListService } from '../../../../Services/user-list.service';

@Component({
  selector: 'amazon-cpu-details',
  templateUrl: './amazon-cpu-details.component.html',
  styleUrls: ['./amazon-cpu-details.component.css']
})
export class AmazonCpuDetailsComponent implements OnInit {

  //@Input() gpu: AmazonGpusResponse;
  @Input() amazonDataTwo: AmazonCpusResponse;

  array: [{
    name:string
  }];

  newUserItem: UserItem = { 
    id: "a",
    asin: 'a',
    value: 1,
    title: "a",
    image: "a",
    qty: 0,
    rating: 0
  };

  categoriesString: String;

  errorMessage: any;

  constructor(private userService: UserListService){
  }

  ngOnInit(): void {
    this.array = this.amazonDataTwo.product.categories;
    this.categoriesString = this.array.join(",");
  }
  
  public results = [];

  handleAddToPc(){

    this.newUserItem.asin = this.amazonDataTwo.product.asin;
    this.newUserItem.value = this.amazonDataTwo.product.buybox_winner.price.value;
    this.newUserItem.title = this.amazonDataTwo.product.title;
    this.newUserItem.image = this.amazonDataTwo.product.images[0].link;
    this.newUserItem.rating = this.amazonDataTwo.product.rating;

    this.userService.addPartToPc(this.newUserItem).subscribe(() => {
      
    })
  }

}
