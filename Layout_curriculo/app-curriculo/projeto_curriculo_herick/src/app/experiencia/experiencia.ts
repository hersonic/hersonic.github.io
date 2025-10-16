import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  imports: [CommonModule],
  templateUrl: './experiencia.html',
  styleUrls: ['./experiencia.css']
})
export class Experiencia implements OnInit {

  // Array para armazenar as experiências profissionais

  experiencias: { cargo: string; empresa: string; periodo: string; descricao: string }[] = [];

  // Simulando dados de experiência profissional
  // Em um cenário real, esses dados poderiam ser buscados de uma API ou serviço

  ngOnInit(): void {
    this.experiencias = [
      {
        cargo: 'Software Developer',
        empresa: 'Localiza',
        periodo: 'Jan 2022 - Jun 2025',
        descricao: 'Atuei como desenvolvedor frontend em uma tribo/squad colaborativa, contribuindo diretamente para o ciclo completo de desenvolvimento ágil. Responsável pela implementação e manutenção de interfaces web modernas, participei ativamente de sprints, reuniões diárias de alinhamento (daily meetings), além de retrospectivas e reuniões mensais de evolução de equipe e produto.'
      },
      {
        cargo: 'Assistente de TI',
        empresa: 'Linx',
        periodo: 'Mai 2014 - Jan 2021',
        descricao: 'Atuei no suporte técnico e operacional de sistemas na área de meios de pagamento. Minhas responsabilidades incluíram o cadastro de lojas no servidor Azure usando integração com a ferramenta SITEF da Software Express, além de realizar consultas SQL para análise da qualidade do software LINX POS. Realizei instalação e manutenção de módulos de adquirentes, configurações de pinpads e ajustes de lógica enviadas pelas contratadas. Também fui responsável pela digitação de tarefas programadas (TP), reembolso de despesas, treinamentos e atendimento de clientes via chat utilizando conexão VPN.'
      }

    ];
  }
}
