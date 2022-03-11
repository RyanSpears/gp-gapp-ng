import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/api/auth.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup = null;
  response: any | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private alertCtl: AlertController) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.maxLength(100)
        ])
      ],
      password: ['', Validators.required]
    });
  }

  login() {
    this.authService.login(this.form.controls.email.value, this.form.controls.password.value)
      .subscribe(
        (response: any) => {
          this.response = response;
        },
        (error: string) => {
          this.alertCtl.create({ message: error });
        }
      );
  }
}
