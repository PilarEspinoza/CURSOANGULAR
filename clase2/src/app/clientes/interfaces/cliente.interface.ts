export interface Cliente {
    id?:        string;
    nombres:   string;
    apellidos: string;
    celular:   string;
    direccion: string;
    correo:    string;
    estado?:    boolean;
}