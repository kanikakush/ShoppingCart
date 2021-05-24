import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';


import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { FilterPipe } from './pipes/filter.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SortPipe } from './pipes/sort.pipe';
import {MatBadgeModule} from '@angular/material/badge';
@NgModule({
  declarations: [
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    FilterPipe,
    SortPipe,



  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule
  ],
  exports:[
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,


  ]
})
export class ProductsModule { }
