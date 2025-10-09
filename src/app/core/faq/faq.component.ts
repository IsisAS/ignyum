import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  category?: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'Vai me dar tremedeira?',
      answer: 'Nossa fórmula foi desenvolvida especificamente para proporcionar energia estável e foco sem os efeitos colaterais indesejados. Utilizamos ingredientes de alta qualidade que promovem energia sustentada. No entanto, a sensibilidade é individual e pode variar de pessoa para pessoa.',
      isOpen: false,
      category: 'efeitos'
    },
    {
      id: 2,
      question: 'Tem beta-alanina?',
      answer: 'Não, nossos produtos não contêm beta-alanina. Isso significa que você não sentirá aquela sensação de "coceira" ou formigamento que é comum em outros suplementos pré-treino.',
      isOpen: false,
      category: 'ingredientes'
    },
    {
      id: 3,
      question: 'Posso tomar sem treinar?',
      answer: 'Nossos produtos são especificamente formulados para atividade física e foco cognitivo. Recomendamos o uso antes de exercícios ou atividades que exijam concentração mental. Para uso fora desses contextos, consulte um profissional de saúde.',
      isOpen: false,
      category: 'uso'
    },
    {
      id: 4,
      question: 'Tem açúcar?',
      answer: 'Mantemos um perfil nutricional clean em todos os nossos produtos. Para informações detalhadas sobre açúcares e adoçantes, consulte a tabela nutricional específica de cada sabor no rótulo do produto.',
      isOpen: false,
      category: 'ingredientes'
    },
    {
      id: 5,
      question: 'É vegano?',
      answer: 'A composição varia de acordo com o sabor. Alguns de nossos produtos são veganos, outros podem conter ingredientes de origem animal. Sempre verifique o rótulo específico do sabor escolhido para confirmar.',
      isOpen: false,
      category: 'ingredientes'
    },
    {
      id: 6,
      question: 'Quanto tempo dura o efeito?',
      answer: 'O efeito energético geralmente dura entre 4 a 6 horas, proporcionando energia sustentada sem o crash típico de outros estimulantes. A duração pode variar conforme o metabolismo individual.',
      isOpen: false,
      category: 'efeitos'
    },
    {
      id: 7,
      question: 'Posso tomar todos os dias?',
      answer: 'Recomendamos uso conforme necessidade para atividades físicas ou cognitivas. Para uso diário contínuo, consulte um profissional de saúde para orientação personalizada.',
      isOpen: false,
      category: 'uso'
    },
    {
      id: 8,
      question: 'Como devo tomar?',
      answer: 'Dissolva o conteúdo de 1 sachê em 200ml de água gelada, misture bem e consuma 15-30 minutos antes da atividade física ou quando precisar de foco mental.',
      isOpen: false,
      category: 'uso'
    }
  ];

  toggleFAQ(id: number): void {
    const item = this.faqItems.find(faq => faq.id === id);
    if (item) {
      item.isOpen = !item.isOpen;
    }
  }

  closeAllFAQs(): void {
    this.faqItems.forEach(item => item.isOpen = false);
  }

  openAllFAQs(): void {
    this.faqItems.forEach(item => item.isOpen = true);
  }

  trackByFn(index: number, item: FAQItem): number {
    return item.id;
  }
}