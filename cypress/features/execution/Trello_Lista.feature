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