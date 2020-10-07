import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../services/feedback/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  Feedback:any = [];

  constructor(
    private FeedbackService:FeedbackService,
    private route:ActivatedRoute
    ) {
      let id = this.route.snapshot.paramMap.get('id');
      this.readFeedback(id);
    }

  ngOnInit(): void {
  }

  readFeedback(id){
    this.FeedbackService.viewOrderFeedback(id).subscribe(data=>{
      console.log(data);
      this.Feedback = data;
    })
  }

}
