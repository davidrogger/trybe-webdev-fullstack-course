# Testando components e pages com rota

Para testar de forma mais eficiente é criando uma função auxiliar apresentada na documentação da biblioteca de testes:

```
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';

export function renderWithRouter(ui: JSX.Element, { route = '/' } = {}) {
  window.history.pushState({}, '', route);
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter })
  }
}
```

Por ser necessário sempre "embrulhar" os componentes que usam rota com o BrowserRouter, se torna mais eficiente e menos propenso a erros usando a função auxiliar, onde podemos até mesmo definir no segundo parametro, onde queremos que a aplicação seja direcionada na rota usando o pushState.
No retorno da função também é adicionado o userEvent, para realizarmos as ações dentro do componente renderizado.

# Additional Resources

- [React Router Example](https://testing-library.com/docs/example-react-router)
- [History Docs](https://github.com/ReactTraining/history/tree/master/docs)
- [RTL FAQ](https://testing-library.com/docs/react-testing-library/faq)
- [Explore aqui as funcionalidades mais modernas da RTL!](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library/)
- [History: pushState() method](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState)
