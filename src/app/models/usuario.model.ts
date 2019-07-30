export class Usuario {
    constructor(
        public nombre: string,
        public email: string,
        public password: string,
        public estado?: number ,
        public idtipousuario?: number,
        public idauditorio?: number
    ) { }

}
