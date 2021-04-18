import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  list: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userList();
  }
  userList() {
    this.authService.getUserList().subscribe(data => {
      this.list = data;
      console.log(this.list)
    })
  }
}
