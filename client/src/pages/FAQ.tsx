import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    // Sobre os Produtos
    {
      id: 1,
      category: "Sobre os Produtos",
      question: "Qual e a diferenca entre Velmo Black Capsulas e Velmo Black Drink?",
      answer: "O Velmo Black Capsulas e um suplemento em formato de capsula com 60 unidades (30g), ideal para quem prefere praticidade. O Velmo Black Drink e um po para preparo de bebida com 150g (rende ate 30 porcoes), perfeito para quem gosta de beber e quer mais flexibilidade. Ambos possuem os mesmos ingredientes ativos: Morosil, Picolinato de Cromo, Taurina, Psyllium, Inulina, Curcuma e Hibisco."
    },
    {
      id: 2,
      category: "Sobre os Produtos",
      question: "Os produtos sao naturais?",
      answer: "Sim! Todos os produtos Velmo Black Salvador sao formulados com ingredientes naturais. Nao sao remedios - sao suplementos alimentares que funcionam como aliados da sua dieta e estilo de vida. Cada ingrediente foi selecionado por sua eficacia cientifica comprovada."
    },
    {
      id: 3,
      category: "Sobre os Produtos",
      question: "Qual e a composicao exata dos produtos?",
      answer: "Velmo Black contem: Morosil (extrato de laranja vermelha), Picolinato de Cromo, Taurina, Psyllium, Inulina, Curcuma e Hibisco. Cada ingrediente tem uma funcao especifica: o Morosil auxilia na sensacao de saciedade, o Cromo ajuda no metabolismo de carboidratos, a Taurina fornece energia, o Psyllium e Inulina limpam o intestino, a Curcuma reduz inflamacao e o Hibisco atua como diuretico natural."
    },
    {
      id: 4,
      category: "Sobre os Produtos",
      question: "Posso tomar os dois produtos juntos (Capsulas + Drink)?",
      answer: "Recomendamos consultar um profissional de saude antes de combinar produtos. Geralmente, e mais eficaz escolher um formato e manter consistencia com ele durante os 90 dias de protocolo. Se desejar alternar, faca isso com orientacao profissional para evitar excesso de dosagem."
    },

    // Dosagem e Uso
    {
      id: 5,
      category: "Dosagem e Uso",
      question: "Qual e a dosagem recomendada?",
      answer: "Para Velmo Black Capsulas: 2 capsulas por dia (uma pela manha e uma a noite), 30 minutos antes das principais refeicoes. Para Velmo Black Drink: 1 colher de cha (5g) diluida em agua ou suco, duas vezes ao dia. A consistencia e fundamental - mantenha o uso ininterrupto por minimo 90 dias para consolidacao dos beneficios."
    },
    {
      id: 6,
      category: "Dosagem e Uso",
      question: "Posso tomar em qualquer horario?",
      answer: "O ideal e tomar 30 minutos antes das principais refeicoes (cafe da manha e jantar) para otimizar a absorcao e eficacia. Se tomar em outros horarios, ainda funcionara, mas a eficacia pode ser reduzida. Mantenha um horario consistente todos os dias."
    },
    {
      id: 7,
      category: "Dosagem e Uso",
      question: "Preciso fazer dieta para ver resultados?",
      answer: "Sim! Velmo Black e um aliado da sua dieta, nao um substituto. Para melhores resultados, combine com: alimentacao balanceada, reducao de calorias, hidratacao adequada (minimo 2 litros de agua por dia) e atividade fisica regular. O protocolo completo leva 90 dias para consolidacao."
    },
    {
      id: 8,
      category: "Dosagem e Uso",
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os primeiros resultados geralmente aparecem entre 15-30 dias (mais energia, menos fome, reducao de inchaco). Resultados mais significativos em emagrecimento aparecem entre 30-60 dias. Para consolidacao completa e recomendado manter o uso por 90 dias."
    },

    // Seguranca e Efeitos
    {
      id: 9,
      category: "Seguranca e Efeitos",
      question: "Existem efeitos colaterais?",
      answer: "Velmo Black e bem tolerado pela maioria das pessoas. Alguns usuarios podem experimentar: leve desconforto digestivo nos primeiros dias (normal durante adaptacao), aumento na frequencia urinaria (devido ao efeito diuretico do hibisco) ou leve insonia se tomado muito tarde (devido a cafeina natural). Se algum efeito persistir, reduza a dosagem ou consulte um profissional."
    },
    {
      id: 10,
      category: "Seguranca e Efeitos",
      question: "Posso tomar se tenho pressao alta?",
      answer: "Recomendamos consultar seu medico antes de usar, especialmente se voce ja toma medicamentos para pressao. O hibisco pode ter efeito diuretico e o picolinato de cromo pode afetar niveis de glicose. Um profissional de saude pode avaliar se e seguro para seu caso especifico."
    },
    {
      id: 11,
      category: "Seguranca e Efeitos",
      question: "Posso tomar durante a gravidez ou amamentacao?",
      answer: "Nao recomendamos o uso durante gravidez ou amamentacao sem orientacao medica. Alguns ingredientes podem nao ser adequados nestes periodos. Consulte seu obstetra antes de usar qualquer suplemento."
    },
    {
      id: 12,
      category: "Seguranca e Efeitos",
      question: "Velmo Black causa dependencia?",
      answer: "Nao! Velmo Black nao causa dependencia. E um suplemento alimentar que auxilia seu metabolismo. Apos 90 dias, voce pode continuar usando, fazer uma pausa ou ajustar conforme necessario. Nao ha habito de dependencia quimica."
    },

    // Compra e Entrega
    {
      id: 13,
      category: "Compra e Entrega",
      question: "Qual e o prazo de entrega?",
      answer: "O prazo varia conforme sua localizacao. Geralmente: Brasil (exceto regioes remotas): 3-7 dias uteis. Regioes Norte/Nordeste: 5-10 dias uteis. Voce recebera um codigo de rastreamento apos a confirmacao do pagamento para acompanhar seu pedido em tempo real."
    },
    {
      id: 14,
      category: "Compra e Entrega",
      question: "Qual e o valor do frete?",
      answer: "O valor do frete e calculado automaticamente no carrinho conforme seu CEP. Oferecemos frete gratis para compras acima de R$ 150 em regioes selecionadas. Consulte as condicoes especiais de promocao no momento da compra."
    },
    {
      id: 15,
      category: "Compra e Entrega",
      question: "Posso comprar por boleto ou PIX?",
      answer: "Sim! Aceitamos multiplas formas de pagamento: Cartao de credito (parcelado em ate 12x), Boleto bancario, PIX (com desconto de 5%), Transferencia bancaria. Escolha a opcao que preferir no checkout."
    },
    {
      id: 16,
      category: "Compra e Entrega",
      question: "Existe garantia de satisfacao?",
      answer: "Sim! Oferecemos garantia de 30 dias. Se nao ficar satisfeito com o produto, devolvemos 100% do valor pago, sem perguntas. Basta entrar em contato conosco dentro de 30 dias apos a compra."
    },

    // Armazenamento e Validade
    {
      id: 17,
      category: "Armazenamento e Validade",
      question: "Como devo armazenar o produto?",
      answer: "Guarde em local fresco e seco, longe da luz solar direta e umidade. Para Capsulas: mantenha na embalagem original. Para Drink: apos abrir, feche bem e armazene em local fresco. Temperatura ideal: entre 15-25 graus Celsius."
    },
    {
      id: 18,
      category: "Armazenamento e Validade",
      question: "Qual e a validade do produto?",
      answer: "A validade varia conforme o lote, mas geralmente e de 24 meses a partir da data de fabricacao. Voce encontrara a data de validade impressa na embalagem. Nunca use o produto apos a data de validade."
    },
    {
      id: 19,
      category: "Armazenamento e Validade",
      question: "O produto vence rapido?",
      answer: "Nao! Com armazenamento adequado, o produto mantem sua potencia durante toda a validade (geralmente 2 anos). Se voce seguir o protocolo de 90 dias, usara o produto bem antes do vencimento."
    },

    // Interacoes e Contraindicacoes
    {
      id: 20,
      category: "Interacoes e Contraindicacoes",
      question: "Posso tomar Velmo Black com medicamentos?",
      answer: "Recomendamos consultar seu medico ou farmaceutico. Alguns ingredientes (especialmente o picolinato de cromo) podem interagir com certos medicamentos, particularmente aqueles para diabetes ou pressao arterial. Sempre informe seu profissional de saude sobre suplementos que esta tomando."
    },
    {
      id: 21,
      category: "Interacoes e Contraindicacoes",
      question: "Tenho alergia a algum ingrediente. Como saber se posso tomar?",
      answer: "Verifique a lista completa de ingredientes na embalagem. Se voce tem alergias conhecidas, consulte um profissional de saude. Os ingredientes principais sao: Morosil, Picolinato de Cromo, Taurina, Psyllium, Inulina, Curcuma e Hibisco. Se tem alergia a qualquer um deles, nao recomendamos o uso."
    },
    {
      id: 22,
      category: "Interacoes e Contraindicacoes",
      question: "Posso tomar se tenho diabetes?",
      answer: "Recomendamos consultar seu endocrinologista. O picolinato de cromo pode afetar niveis de glicose. Um profissional pode avaliar se e seguro para seu caso e ajustar sua medicacao se necessario."
    },

    // Resultados e Eficacia
    {
      id: 23,
      category: "Resultados e Eficacia",
      question: "Velmo Black realmente funciona?",
      answer: "Sim! Velmo Black e formulado com ingredientes cientificamente comprovados. Porem, resultados variam de pessoa para pessoa dependendo de: dieta, atividade fisica, metabolismo individual, consistencia de uso e estilo de vida. Para melhores resultados, combine com habitos saudaveis."
    },
    {
      id: 24,
      category: "Resultados e Eficacia",
      question: "Quanto peso posso perder?",
      answer: "Nao podemos prometer uma quantidade especifica de perda de peso, pois varia muito entre individuos. Fatores como idade, metabolismo, dieta e exercicio influenciam. Geralmente, usuarios relam perda de 3-8kg em 90 dias quando combinam Velmo Black com dieta balanceada e atividade fisica."
    },
    {
      id: 25,
      category: "Resultados e Eficacia",
      question: "E possivel ter efeito rebote apos parar de tomar?",
      answer: "Se voce retornar aos habitos alimentares anteriores, sim, pode haver ganho de peso. Velmo Black auxilia durante o processo, mas o importante e manter os habitos saudaveis adquiridos. Muitos usuarios continuam tomando para manutencao apos atingir o objetivo."
    }
  ];

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent/10 to-background">
        <div className="container">
          <div className="text-center">
            <span className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
              DUVIDAS FREQUENTES
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Perguntas <span className="text-accent">Frequentes</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encontre respostas para as perguntas mais comuns sobre os produtos Velmo Black Salvador.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                {category}
              </h2>
              <div className="space-y-3">
                {faqs
                  .filter(faq => faq.category === category)
                  .map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-card rounded-lg border border-border overflow-hidden hover:border-accent transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                      >
                        <span className="text-left font-semibold text-foreground">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                            openId === faq.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openId === faq.id && (
                        <div className="px-6 py-4 bg-muted/30 border-t border-border">
                          <p className="text-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nao encontrou sua <span className="text-accent">duvida?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco! Nosso time de suporte esta pronto para ajudar com qualquer pergunta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contato@velmoblacksalvador.com.br"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Enviar Email
            </a>
            <a
              href="https://instagram.com/velmoblacksalvador"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Mensagem no Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
