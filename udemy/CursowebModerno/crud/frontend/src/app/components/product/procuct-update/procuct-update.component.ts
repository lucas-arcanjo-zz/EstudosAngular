import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../product.model";
import { ProductService } from '../product.service';

@Component({
  selector: 'app-procuct-update',
  templateUrl: './procuct-update.component.html',
  styleUrls: ['./procuct-update.component.css']
})
export class ProcuctUpdateComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
       this.product = product
    });
  }

  updateProduct(): void {
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }


}
