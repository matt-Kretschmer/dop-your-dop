import { AuthService } from "./auth.service";
import { ApiService } from "./api.service";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule
    ],
    providers: [AuthService,ApiService],
    // bootstrap: []
  })
  export class ServiceModule { }
  