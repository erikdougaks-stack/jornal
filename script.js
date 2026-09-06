const newsImages = {

  1:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Davies_Coop_-_factory_worker_using_equipment(GN15054).jpg",

  2:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Passenger_aircraft_at_Rio_de_Janeiro_airport,_Brazil.jpg",

  3:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Diecasters_-_male_factory_worker(GN15058).jpg",

  4:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Artificial-Intelligence.jpg",

  5:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Office_interior_2022_queue.jpg",

  6:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/University_Students_in_Brazil.jpg"

};


const news = {

  1: {

    type: "true",

    category: "ECONOMIA",

    title:
      "Brasil abre 58,5 mil vagas com carteira assinada em julho",

    text: `
      <p>
        O Brasil registrou a criação de 58.568 postos de trabalho
        com carteira assinada em julho, segundo dados do Cadastro
        Geral de Empregados e Desempregados (Caged).
      </p>

      <p>
        O resultado corresponde ao saldo entre admissões e
        desligamentos registrados durante o mês.
      </p>

      <p>
        O setor de serviços e a construção civil estiveram entre
        os segmentos que contribuíram para o resultado positivo.
      </p>

      <p>
        Apesar do saldo positivo, o número ficou abaixo do
        registrado em junho e também do observado em julho
        do ano anterior.
      </p>
    `,

    revealTitle:
      "Informação verificada",

    reveal:
      "Esta informação é verdadeira. O saldo de 58.568 empregos formais foi divulgado nos dados do Caged referentes a julho de 2026."

  },


  2: {

    type: "true",

    category: "AVIAÇÃO",

    title:
      "Anac suspende quatro empresas de voos panorâmicos que operavam no Rio",

    text: `
      <p>
        A Agência Nacional de Aviação Civil (Anac) suspendeu
        quatro empresas que realizavam voos panorâmicos na
        cidade do Rio de Janeiro.
      </p>

      <p>
        A decisão ocorreu após uma intensificação das ações
        de fiscalização realizadas pela agência no setor.
      </p>

      <p>
        Até o balanço divulgado pela Anac, nove das 12 empresas
        autorizadas para esse tipo de atividade haviam sido
        fiscalizadas.
      </p>

      <p>
        Entre as 46 aeronaves utilizadas pelas empresas,
        18 haviam passado por fiscalização, sendo que nove
        tiveram suas operações suspensas ou foram interditadas.
      </p>
    `,

    revealTitle:
      "Informação verificada",

    reveal:
      "Esta informação é verdadeira. A suspensão foi anunciada pela Anac em 18 de agosto de 2026 após ações de fiscalização no setor de voos panorâmicos do Rio de Janeiro."

  },


  3: {

    type: "true",

    category: "ECONOMIA",

    title:
      "Produção industrial brasileira volta a crescer após dois meses de queda",

    text: `
      <p>
        A produção industrial brasileira cresceu 0,2% em julho,
        interrompendo uma sequência de dois meses consecutivos
        de queda.
      </p>

      <p>
        O resultado foi divulgado pelo Instituto Brasileiro de
        Geografia e Estatística (IBGE) no início de setembro.
      </p>

      <p>
        Na comparação com julho do ano anterior, entretanto,
        a produção apresentou queda de 0,5%.
      </p>

      <p>
        Segundo a avaliação divulgada junto aos dados,
        o crescimento interrompeu a sequência negativa,
        mas ainda não representa uma recuperação das perdas
        acumuladas nos meses anteriores.
      </p>
    `,

    revealTitle:
      "Informação verificada",

    reveal:
      "Esta informação é verdadeira. O IBGE registrou crescimento de 0,2% na produção industrial em julho de 2026, após dois meses de queda."

  },


  4: {

    type: "false",

    category: "TECNOLOGIA",

    title:
      "Empresa brasileira começa a testar sistema de inteligência artificial para reduzir tempo de atendimento em aeroportos",

    text: `
      <p>
        Uma empresa brasileira de tecnologia iniciou nesta semana
        testes de um sistema baseado em inteligência artificial
        desenvolvido para auxiliar no atendimento de passageiros
        em aeroportos.
      </p>

      <p>
        Segundo informações divulgadas pela companhia, a primeira
        fase do projeto utiliza a ferramenta em dois pontos de
        atendimento durante períodos de maior movimento.
      </p>

      <p>
        O sistema teria sido desenvolvido ao longo de oito meses
        e utiliza informações sobre filas e horários para sugerir
        a distribuição dos atendimentos.
      </p>

      <p>
        A empresa informou que aproximadamente 30 funcionários
        participam da fase inicial de avaliação da tecnologia.
      </p>
    `,

    revealTitle:
      "Conteúdo fictício",

    reveal:
      "Esta matéria foi criada para o experimento. A empresa, o projeto, os números e os detalhes apresentados são fictícios. A notícia foi construída para parecer uma reportagem tecnológica comum."

  },


  5: {

    type: "false",

    category: "BRASIL",

    title:
      "Município inicia projeto-piloto para reduzir filas em unidades de atendimento público",

    text: `
      <p>
        Um município brasileiro teria iniciado um projeto-piloto
        para reduzir o tempo de espera em unidades de atendimento
        público.
      </p>

      <p>
        A iniciativa utilizaria um sistema eletrônico responsável
        por distribuir senhas de acordo com o tipo de serviço
        solicitado pelos usuários.
      </p>

      <p>
        A primeira etapa envolveria três unidades e cerca de
        40 servidores, que acompanhariam o funcionamento da
        ferramenta durante um período de 60 dias.
      </p>

      <p>
        Ao final do período, os responsáveis pelo projeto
        analisariam os tempos médios de espera antes de decidir
        sobre uma possível ampliação.
      </p>
    `,

    revealTitle:
      "Conteúdo fictício",

    reveal:
      "Esta matéria é fictícia. O projeto-piloto, os números e os detalhes administrativos foram criados exclusivamente para esta atividade."

  },


  6: {

    type: "false",

    category: "EDUCAÇÃO",

    title:
      "Universidade desenvolve plataforma para acompanhar abandono de cursos no primeiro ano",

    text: `
      <p>
        Pesquisadores de uma universidade brasileira teriam
        desenvolvido uma plataforma experimental para identificar
        padrões relacionados ao abandono de cursos de graduação.
      </p>

      <p>
        A ferramenta teria sido desenvolvida a partir da análise
        de aproximadamente 2,8 mil registros acadêmicos de
        estudantes que ingressaram na instituição nos últimos anos.
      </p>

      <p>
        Entre os dados avaliados estariam frequência, alterações
        de matrícula e desempenho nas primeiras disciplinas.
      </p>

      <p>
        Segundo a equipe responsável pelo projeto, a plataforma
        ainda estaria em fase de avaliação e não seria utilizada
        para tomar decisões individuais sobre estudantes.
      </p>
    `,

    revealTitle:
      "Conteúdo fictício",

    reveal:
      "Esta matéria é fictícia. A universidade, a plataforma, os dados analisados e os números apresentados foram criados para demonstrar como detalhes aparentemente verificáveis podem aumentar a credibilidade de uma notícia."

  },


  7: {

    type: "special",

    category: "POLÍTICA",

    title:
      "Deputados discutem proposta durante sessão e vídeo da discussão viraliza nas redes",

    text: `
      <p>
        Um vídeo registrado durante uma sessão legislativa
        começou a circular nas redes sociais após uma discussão
        entre dois parlamentares.
      </p>

      <p>
        No vídeo, os dois deputados apresentam posições
        diferentes sobre uma proposta que estava sendo discutida.
      </p>

      <p>
        Durante a conversa, um dos parlamentares faz uma
        declaração considerada provocativa pelo colega,
        que responde imediatamente.
      </p>

      <p>
        O trecho termina poucos segundos depois e passa a ser
        compartilhado por diferentes perfis nas redes sociais.
      </p>
    `,

    revealTitle:
      "Conteúdo produzido para o projeto",

    reveal:
      "Os dois políticos apresentados no vídeo são personagens fictícios interpretados por estudantes. A discussão, a sessão e a declaração foram criadas exclusivamente para esta atividade educacional."

  }

};



let timer;



function openNews(id) {

  const item = news[id];

  if (!item) return;


  const modalImage =
    document.getElementById("modalImage");


  if (newsImages[id]) {

    modalImage.src =
      newsImages[id];

    modalImage.alt =
      item.title;

    modalImage.style.display =
      "block";

  } else {

    modalImage.style.display =
      "none";

  }


  document.getElementById("modalCategory").textContent =
    item.category;


  document.getElementById("modalTitle").textContent =
    item.title;


  document.getElementById("modalText").innerHTML =
    item.text;


  document.getElementById("revealTitle").textContent =
    item.revealTitle;


  document.getElementById("revealText").textContent =
    item.reveal;


  document
    .getElementById("reveal")
    .classList
    .remove("show");


  document
    .getElementById("modal")
    .classList
    .add("active");


  let seconds = 7;


  const timerElement =
    document.getElementById("timer");


  timerElement.textContent =
    "Verificando informações...";


  clearInterval(timer);


  timer = setInterval(() => {

    seconds--;


    if (seconds > 0) {

      timerElement.textContent =
        "Verificando informações...";

    } else {

      clearInterval(timer);


      timerElement.textContent =
        "Verificação concluída.";


      document
        .getElementById("reveal")
        .classList
        .add("show");

    }

  }, 1000);

}



function closeNews() {

  clearInterval(timer);


  document
    .getElementById("modal")
    .classList
    .remove("active");

}



document
  .getElementById("modal")
  .addEventListener(
    "click",
    function(event) {

      if (event.target === this) {

        closeNews();

      }

    }
  );



document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {

      closeNews();

    }

  }
);
