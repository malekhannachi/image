import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  addForm: FormGroup;
  userFile: any;
  public imagePath: any;
  imgURL: any = '';
  //

  constructor(private fb: FormBuilder, private us: UserService) {
    let formControles = {
      name: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    };
    this.addForm = this.fb.group(formControles);
  }

  ngOnInit(): void {}
  //

  addUser() {
    let data = this.addForm.value;
 
    console.log(data);
    console.log(this.imgURL);
    let user = new User( data.name, this.imgURL);
    console.log(user);
    console.log(data);
    this.us.addUser(user).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  //
  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }
}
