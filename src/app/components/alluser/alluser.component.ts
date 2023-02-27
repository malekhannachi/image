import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css'],
})
export class AlluserComponent implements OnInit {
  userList: any[] = [];

  constructor(private us: UserService) {}

  ngOnInit(): void {
    this.us.getAllUser().subscribe(
      (res) => {
        this.userList = res;

        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteUser(user: any) {
    this.us.deleteUser(user.id).subscribe(
      (result) => {
        console.log(result);

        let index = this.userList.indexOf(event);
        this.userList.splice(index, 1);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
