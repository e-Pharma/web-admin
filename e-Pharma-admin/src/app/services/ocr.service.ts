import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { ProcessHTTPMsgService } from "./process-httpmsg.service";
import { baseURL } from "app/shared/baseurl";
import { catchError } from "rxjs/operators";
import { azure_key } from "app/shared/azure";

@Injectable({
  providedIn: "root",
})
export class OcrService {
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  getText(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": azure_key,
      }),
    };

    if(id=="5f0360153163942537b0313a"){
      console.log("here"+id)
      return this.http
      .get<any>(
        // "https://southeastasia.api.cognitive.microsoft.com/vision/v2.0/textOperations/6250c660-1746-48bd-af0d-662df44f68fe",
         "https://southeastasia.api.cognitive.microsoft.com/vision/v2.0/textOperations/0cf38067-4c95-43c4-9c6d-cbc886afbe18",
        httpOptions
      )
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }
    else{
      return this.http
      .get<any>(
        "https://southeastasia.api.cognitive.microsoft.com/vision/v2.0/textOperations/6250c660-1746-48bd-af0d-662df44f68fe",
        // "https://southeastasia.api.cognitive.microsoft.com/vision/v2.0/textOperations/0cf38067-4c95-43c4-9c6d-cbc886afbe18",
        httpOptions
      )
      .pipe(catchError(this.processHTTPMsgService.handleError)); 
    }
    // return this.http
    //   .get<any>(
    //     "https://southeastasia.api.cognitive.microsoft.com/vision/v2.0/textOperations/6250c660-1746-48bd-af0d-662df44f68fe",
    //     // "https://southeastasia.api.cognitive.microsoft.com/vision/v2.0/textOperations/0cf38067-4c95-43c4-9c6d-cbc886afbe18",
    //     httpOptions
    //   )
    //   .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getUrl(doc: any) {
    console.log(doc)
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": azure_key,

      }),
    };

    return this.http
      .post<any>(
        "https://southeastasia.api.cognitive.microsoft.com/vision/v2.0/recognizeText?mode=Handwritten",
        doc,
        httpOptions
      )
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
