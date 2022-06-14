anotações pessoais do dia...

# O que é "Arquitetura de Software"?

É um conhecimento compartilhado por desenvolvedores experientes sobre como organizar um sistema de software - by Martin Fowler.

É a maneira como o sistema se organiza, quais são seus componentes, como eles conversam entre si, como as responsabilidades são distribuídas e etc.

Existem padrões de arquitetura específicos para problemas específicos.
Independente da arquitetura utilizada, é a divisão de responsabilidades por camadas.

# Regras de negócio

É um conceito essencial para entender a motivação por trás das arquiteturas. Definem ou restringem algum aspecto de um negócio. São elas que definem como o negócio deve se comportar, quando uma ação deve ser tomada e etc. As regras de negócio devem ser muito bem definidas e documentadas, pois guiam as tomadas de decisão e moldam processos. A princípio, as regras de negócio podem ser executadas manualmente, mas tem se tornado cada vez mais comum automatizá-las com a ajuda de sistemas de software.

# Arquitetura MSC

Três camadas:

- Camada de Modelo(M): Arquivos onde iremos executar as operações do banco de dados, como criar conexões e executar queries.
- Camada de Serviço(S): Arquivos onde iremos estruturar nossas regras de negócio, geralmente é quem chama os métodos definidos na camada de modelo.
- Camada de Controladores(C): Interface próxima da pessoa usuário ou de uma requisição, irá processar e chamar as devidas funções da camada de serviço.

Algumas vezes a camada de controladores pode se comunicar direto com a camada de modelo, dispensando o uso da camada de serviço, principalmente em situações em que não temos uma regra de negócio tão complexa. Isso deve ser usado apenas em casos específicos, e uma vez que um endpoint exija o uso de uma camada de serviço, o ideal é que todos os outros também utilizem essa camada, para que a arquitetura seja respeitada e a aplicação não se torne "bagunçada".
