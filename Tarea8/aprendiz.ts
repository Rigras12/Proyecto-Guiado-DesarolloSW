import {Curso} from './curso.js';

export enum NivelEducativo
{
    BACHILLERATO = "Bachillerato",
    UNIVERSITARIO = "Universitario",
    POSGRADO = "Posgrado"
}


export class Aprendiz
{
    constructor(public nombres: string, public apellidos: string, public avarPath:string,public  edad: number, public nivelEducativo: NivelEducativo,public cursos :Curso[])
    {
        
    }

    public darCursosCertificados():number{
        let totalCertificados :number =0;
        for(let index =0; index<this.cursos.length;index++){
            if(this.cursos[index].certificado){
                totalCertificados+=1;
            }
        }
        return totalCertificados;
    }
}