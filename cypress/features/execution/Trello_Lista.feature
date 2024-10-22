Feature: Trello Lista

    Rule: Gerenciar uma lista em um determinado board no trello


        Scenario: criar uma lista com sucesso
            Given que possuo um board e credenciais ja existe
            When crio a lista
            Then valido que a lista foi criada com sucesso

        Scenario: criar uma lista sem sucesso
            Given que possuo um board e credenciais invalidas
            When crio a lista
            Then valido mensagem de erro

        Scenario: Consulta personagem especifico 1
            Given que possuo um personagem para consultar $1
            When faço a consultar
            Then que os dados do personagem seja retornado

        Scenario: Consulta personagem especifico 2
            Given que possuo um personagem para consultar $2
            When faço a consultar
            Then que os dados do personagem seja retornado

        Scenario: Consulta personagem especifico 3
            Given que possuo um personagem para consultar $3
            When faço a consultar
            Then que os dados do personagem seja retornado

        Scenario: Consulta personagem especifico 4
            Given que possuo um personagem para consultar $4
            When faço a consultar
            Then que os dados do personagem seja retornado