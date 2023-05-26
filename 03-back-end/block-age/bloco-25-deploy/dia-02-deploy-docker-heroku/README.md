anotações do dia...

# CI Continuous integration (Integração contínua)

É um processo de automação utilizado pro pessoas desenvolvedoras. Um CI é realizada com sucesso quando novas mudanças no código são desenvolvidas, testadas e consolidadas em um repositório, por exemplo: a correção de um bug ou o deploy de uma feature nova. Essa é uma solução ideal para evitar os conflitos quando diversas funcionalidades de uma aplicação são desenvolvidas de forma simultânea por um time de pessoas desenvolvedoras.

Ao utilizar a integraçaão contínua(CI), os merges acontecem com mais frequencia, as mudanças são consolidadas e testadas de forma automatizada para garantir que as novas mudanças não irão corromper a aplicação final.

Exemplos de ferramentas de integração continua:

- Actions GitHub: ESLint, testes automatizados, automações, etc...
- GitLab CI;
- Jenkings;
- Circle CI.

## GitHub Actions

As actions são ações propriamente ditas que realizam algum tipo de evento, antes ou depois de realizar um push por exemplo, seja ela para branch principal ou uma branch especifica, tudo irá depender do arquivo de configuração .yml.

# CD: Continuous delivery (entrega contínua)

Está relacionado com a entrega contínua ou implantação contínua. No geral, representa mudanças feitas por uma pessoa desenvolvedora que são automaticamente testadas contra bugs ou falhas e carregadas a alguma repositório. O objetivo final é garantir visbilidade e comunicação ente todas as equipes de desenvolvimento e garantir o mínimo de esforço na implementação de novos códigos em produção.

CI/CD geram monitoramentos e automações contínuas em todo o ciclo de vida da aplicação, incluindo também as etapas de testes, integraçaão, entrega e implantação. Essas práticas muitas vezes são chamadas de "Pipeline de CI/CD" e são utilizadas juntamente às metologias àgeis.

[exercicio](https://github.com/davidrogger/herocker-exercise-frontend)
[exercicio](https://github.com/davidrogger/herocker-exercise-backend)