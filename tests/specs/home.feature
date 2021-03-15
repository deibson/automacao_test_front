#language: pt
Funcionalidade: Carrinho de produtos

    Contexto: Página principal
        Dado que eu acesso a página Livelo

    Esquema do Cenario: Adicionar produto no carrinho

        Quando que eu selecino um menu "<colletion>", "<category>", "<segment>", "<option>"
        Entao que eu verifico a classificação "<option>"
        Quando que eu seleciono um produto
        Entao que eu adiciono um produto no carrinho
        E que eu verifico o produto no carrinho
        E que eu removo o poduto do carrinho

        Exemplos:
            | colletion       | category     | segment | option                |
            | Use seus pontos | Com produtos | Casa    | Eletroportáteis       |
            | Use seus pontos | Com produtos | Casa    | Eletrodomésticos      |
            | Use seus pontos | Com produtos | Casa    | Utilidades Domésticas |
            | Use seus pontos | Com produtos | Casa    | Cama, Mesa E Banho    |

