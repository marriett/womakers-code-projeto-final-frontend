const section = document.querySelector(".section")

const articles = [
    {
        type: 'text content',
        title: 'Quem foi Enedina',
        content: ['Enedina Alves Marques foi uma professora e pioneira engenheira brasileira. Formou-se em Engenharia Civil em 1945 pela Universidade Federal do Paraná, entrando para a história como a primeira mulher a se formar em engenharia no estado e a primeira engenheira negra do Brasil.']
    }, {
        type: 'text content',
        title: 'Bio',
        content: ['Enedina nasceu na capital paranaense em 1913. Na década de 1920, sua mãe, Dona Duca, foi trabalhar para a família do delegado e major Domingos Nascimento Sobrinho.Domingos tinha uma filha de mesma idade de Enedina, e decidiu pagar pela educação de Enedina em colégios particulares, para que ela fizesse companhia a sua filha Isabel.', 'Entre 1925 e 1926, Enedina foi alfabetizada na Escola Particular da Professora Luiza, dirigida pela professora Luiza Dorfmund. No ano seguinte, ingressou na Escola Normal, onde permaneceu até 1931. Entre 1932 e 1935, formou-se no curso Normal e junto com Isabel, Enedina passa a trabalhar como professora no interior do estado, antes de voltar para Curitiba, onde atuou como professora antes de iniciar sua carreira como engenheira.']
    }, {
        type: 'text content',
        title: 'Engenharia',
        content: ['Em 1940, ingressou na Faculdade de Engenharia da Universidade do Paraná. Em 1945, Enedina graduou-se em Engenharia Civil, tornando-se a primeira mulher engenheira do Paraná e a primeira engenheira negra do Brasil. Antes dela, dois negros se formaram em Engenharia na instituição: Otávio Alencar (1918) e Nelson José da Rocha (1938).', 'Em 1946, Enedina se tornou auxiliar de engenharia na Secretaria de Estado de Viação e Obras Públicas, foi chefe de hidráulica, chefe da divisão de estatísticas e do serviço de engenharia do Paraná, na Secretaria de Educação e Cultura do Estado. No ano seguinte, o governador Moisés Lupion, concede transferência para o Departamento Estadual de Águas e Energia Elétrica. Enedina trabalhou no Plano Hidrelétrico do estado e atuou no aproveitamento das águas dos rios Capivari, Cachoeira e Iguaçu.', 'Para muitos, a Usina Capivari-Cachoeira foi seu maior feito como engenheira. Dentre outras de suas obras, destacam-se o Colégio Estadual do Paraná e a Casa do Estudante Universitário de Curitiba.']
    },
    {
        type: 'list content',
        title: 'Homenagens',
        content: [
            'Em 1988, uma rua da Vila Oficinas, no bairro Cajuru, foi batizada com o seu nome e Enedina recebeu uma inscrição no Memorial à Mulher Pioneira, local construído pelas Soroptimistas, organização internacional voltada aos direitos humanos, da qual participou.', 'Em 2006, foi fundado o Instituto de Mulheres Negras Enedina Alves Marques, em Maringá.', 'Em 2014, uma campanha pela internet pedia que o Edifício Teixeira Soares, ex-RFFSA, adquirido pela UFPR, fosse renomeado em sua homenagem.', 'Em 2018, placa em homenagem no prédio de Tecnologia da Universidade Federal do Paraná (UFPR).', 'Em 2019 a Assembleia Legislativa do Estado do Paraná aprovou o projeto de lei que denomina Engenheira Enedina Alves Marques o trecho da PR-340 entre Cacatu e Cachoeira de Cima, no município de Antonina.', 'Em 2021. Homenagem para Enedina Marques por Turma da Mônica no Dia Internacional das Mulheres na Engenharia.', 'Em 2023, o Doodle do Google no Brasil homenageou na data de seu aniversário.'

        ]
    }
]

for (let i = 0; i < articles.length; i++) {
    const newArticle = document.createElement('article')
    newArticle.classList.add('topic')
    const newArticleTitle = document.createElement('h3')
    newArticleTitle.classList.add('topic_title')
    newArticleTitle.innerText = articles[i].title
    newArticle.appendChild(newArticleTitle)

    for (let j = 0; j < articles[i].content.length; j++) {
        if (articles[i].type === 'list content') {
            const newUl = document.createElement('ul')

            const newLi = document.createElement('li')
            newLi.classList.add('topic_list')
            newLi.innerText = articles[i].content[j]
            newUl.appendChild(newLi)
            newArticle.appendChild(newUl)

        } else {
            const newArticleContent = document.createElement('p')
            newArticleContent.classList.add('topic_description')
            newArticleContent.innerText = articles[i].content[j]
            newArticle.appendChild(newArticleContent)
        }
    }



    section.appendChild(newArticle)
}