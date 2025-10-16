import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css'
})
export class Sobre implements OnInit {

  public idade: number | undefined;
  public anosCasado: number | undefined;
  public idadeCrianca: number | undefined;

  ngOnInit() {
    this.atualizarIdade();
    this.atualizarCasamento();
    this.atualizarIdadeCrianca();
  }

  atualizarIdade() {
    const dataNascimento = new Date(1982, 6, 19); // Ano, mês (0-11), dia
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
      this.idade = idade - 1;
    } else {
      this.idade = idade;
    }
  }

  atualizarCasamento() {
    const dataCasamento = new Date(2010, 2, 11); // Ano, mês (0-11), dia
    const hoje = new Date();
    const anosCasado = hoje.getFullYear() - dataCasamento.getFullYear();
    const mes = hoje.getMonth() - dataCasamento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataCasamento.getDate())) {
      this.anosCasado = anosCasado - 1;
    } else {
      this.anosCasado = anosCasado;
    }
  }

  atualizarIdadeCrianca(){
    const dataNascimento = new Date(2020, 8, 21); // Ano, mês (0-11), dia
    const hoje = new Date();
    const idadeCrianca = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
      this.idadeCrianca = idadeCrianca - 1;
    } else {
      this.idadeCrianca = idadeCrianca;
    }
  }

}
