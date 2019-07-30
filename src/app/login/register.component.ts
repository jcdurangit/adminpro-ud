import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) { }

  ngOnInit() {
    init_plugins();

    this.forma = new FormGroup({
        nombre: new FormControl( null , Validators.required),
        email: new FormControl(null , [Validators.required, Validators.email]),
        password: new FormControl(null , Validators.required),
        password2: new FormControl(null , Validators.required),
        condiciones: new FormControl(false)
    }, { validators: this.passwordIguales } );
  }

  passwordIguales(group: FormGroup) {
    return group.get('password').value === group.get('password2').value
       ? null : {'passwordNoIguales': true};
 }

  registrarUsuario() {

    if ( this.forma.invalid ) {
      return;
    }
    if ( !this.forma.value.condiciones ) {
      swal('Importante', 'Debe de aceptar las condiciones', 'warning');
      return;
    }

    const usuario = new Usuario (
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password
    );

    this._usuarioService.crearUsuario( usuario )
                        .subscribe( resp => {
                          console.log(resp);
                          this.router.navigate(['/login']);
                        });
  }

}
