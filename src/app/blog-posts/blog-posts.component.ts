import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPostService } from '../services/blog-post.service';
import { BlogPost } from '../models/blogpost';
import { ActivatedRoute } from '@angular/router';
import { GridDataResult, DataStateChangeEvent, ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { sampleFraudData } from '../models/FraudData';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {

  public columns: any[] = [{ field: "FileNo" }, { field: "ImageName" }, { field: "Software" }, { field: "CopyMoveSplicingRate" }, { field: "AnalysisDate" }];

  public samplegridData: any = sampleFraudData;
  public data: any[] = [{
    kind: 'Hydroelectric', share: 0.175
  }, {
    kind: 'Nuclear', share: 0.238
  }, {
    kind: 'Coal', share: 0.118
  }, {
    kind: 'Solar', share: 0.052
  }, {
    kind: 'Wind', share: 0.225
  }, {
    kind: 'Other', share: 0.192
  }];

  public from: number = 0;
  public to: number = 100;
  public series: any[] = [{
    name: "Software Manipulation Rate",
    data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
  }, {
    name: "Copy-Move-Splicing Rate",
    data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, 5.147, 4.3, 4.3]
  }];
  public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
  @Input() selectedItem: string;
  // public columns: any[] = [{ field: "postId" }, { field: "creator" }, { field: "title" }, { field: "body" }, { field: "dt" }];
  // public bindingType: String = 'array';
  // public view: Observable<GridDataResult>;
  // public gridData: any = products;
  // public gridDataResult: GridDataResult = { data: products, total: products.length };
  gridData$: Observable<BlogPost[]>;
  blogPost$: Observable<BlogPost[]>;

  blogs = new Array<BlogPost>();

  constructor(private blogPostService: BlogPostService, private notificationService: NotificationService) {

  }

  ngOnInit() {
    this.loadGrid();
    this.loadBlogPosts();

  }

  loadGrid() {

    this.blogPostService.getBlogPosts().subscribe(res => {
      this.blogs = res.map(item => {
        return new BlogPost(
          item.postId,
          item.creator,
          item.title,
          item.body,
          item.dt
        );
      });
    });

  }

  loadBlogPosts() {
    this.blogPost$ = this.blogPostService.getBlogPosts();
    //this.gridData$ = this.blogPost$;
    console.log(this.blogPost$);
  }

  delete(postId) {
    const ans = confirm('Do you want to delete blog post with id: ' + postId);
    if (ans) {
      this.blogPostService.deleteBlogPost(postId).subscribe((data) => {
        this.loadBlogPosts();
      });
    }
  }


}
