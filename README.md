# Patrick San — Site Oficial (v2 — Portfólio Premium)

Site institucional de Patrick San — chef, pescador profissional e produtor artesanal de Cananéia e Ilha Comprida (litoral sul de São Paulo).

## Arquitetura

Este site funciona como **portfólio premium e hub de apresentação profissional** — não como e-commerce. A navegação reflete quatro frentes de atuação que nascem de uma fundação comum (o território), em ordem de prioridade:

1. **Experiências** — escada de valor: Experiências Caiçaras → Experiências Especiais → Vivência Caiçara Completa
2. **Cursos & Mentorias** — Cursos Online, Cursos Presenciais, Treinamentos para Restaurantes, Mentorias
3. **Namazuko** — criação autoral, uma frente entre quatro (não o centro do site)
4. **Parcerias** — hub institucional para restaurantes, hotéis, marcas, imprensa e mais

Território e Patrick San funcionam como fundação e credencial pessoal, presentes em todas as páginas. Diário do Lagamar é a camada editorial transversal que conecta as quatro frentes.

Para o raciocínio completo da arquitetura — mapa de páginas, CTAs, conexões e roadmap — veja `MASTER_BLUEPRINT_PATRICK_SAN.md` (se presente no projeto) e `MEDIA_MAP.md`.

## Estrutura

```
patrick-san-v2/
├── index.html                  Home
├── pages/
│   ├── territorio.html         Território — a fundação
│   ├── patrick-san.html        Patrick San — credencial pessoal
│   ├── experiencias.html       Experiências — escada de valor (página mais robusta)
│   ├── cursos-mentorias.html    Cursos & Mentorias
│   ├── namazuko.html           Namazuko — criação autoral
│   ├── parcerias.html           Parcerias — hub institucional
│   ├── diario-do-lagamar.html   Diário do Lagamar — plataforma editorial
│   └── contato.html             Contato — fale conosco
├── assets/
│   ├── css/style.css            Design system completo
│   ├── js/script.js             Navegação, animações, formulários
│   ├── images/                  PLACEHOLDERS — substituir pelas fotos reais
│   └── videos/                  PLACEHOLDERS — substituir pelos vídeos reais
├── MEDIA_MAP.md                  Lista exaustiva de toda mídia esperada
└── README.md
```

## Menu de navegação

```
Território → Patrick San → Experiências → Cursos & Mentorias →
Namazuko → Parcerias → Diário do Lagamar → [Contato]
```

Contato é um CTA destacado, fora da navegação principal.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie todos estes arquivos para a branch `main`.
2. Em **Settings > Pages**, selecione a branch `main` e a pasta raiz (`/`).
3. O site ficará disponível em `https://<usuario>.github.io/<repositorio>/`.

> Importante: como os links internos usam caminhos relativos (`pages/...`, `../index.html`),
> o site funciona tanto na raiz quanto em subdiretórios do GitHub Pages.

## Substituir fotos e vídeos

Todos os arquivos de mídia são placeholders nomeados (atualmente vazios). Basta colocar o
arquivo real com o **mesmo nome exato** dentro de `assets/images/` ou `assets/videos/` —
nenhum código precisa ser alterado.

Veja `MEDIA_MAP.md` para a lista completa, organizada por página e seção, com formato,
proporção e prioridade de cada arquivo.

## Conteúdo pendente — `[CONTEÚDO A DEFINIR]` e `[VALIDAR COM PATRICK]`

Várias seções contêm marcadores de conteúdo pendente:

- **`[CONTEÚDO A DEFINIR]`** — texto novo que ainda não existe (ex: as 4 novas Experiências
  Caiçaras — Pesca Submarina em Apneia, Rota das Ostras, Comunidades Tradicionais, Enseada
  da Baleia — e toda a página Cursos & Mentorias, que é nova).
- **`[VALIDAR COM PATRICK]`** — informação que existe mas precisa de confirmação (ex:
  processo de cura do Namazuko, espécies do estuário, pratos do menu da Rota Gastronômica
  do Lagamar).

### Lista de pendências principais

- Textos completos das 4 novas Experiências Caiçaras (Apneia, Ostras, Comunidades
  Tradicionais, Enseada da Baleia) — a Enseada da Baleia é sazonal, isso precisa ficar
  claro no texto final.
- Ementas dos 4 Cursos Online, e descrições de Cursos Presenciais, Treinamentos para
  Restaurantes e Mentorias.
- Descrições das 8 categorias de Parcerias (já há um texto inicial — revisar com Patrick).
- Todos os 9 artigos do Diário do Lagamar são placeholders. O artigo de "Gastronomia de
  Território" precisa de nova pauta (o conteúdo anterior remetia à linha descontinuada de
  Charcutaria do Mar).
- Número de WhatsApp, usuário do Instagram, endereço de contato (atualmente placeholders
  `55XXXXXXXXXXX` e `instagram.com/`).
- Mapa de localização (atualmente usa imagem estática — substituir por embed real).
- Processo de cura do Namazuko (etapas e tempo).

## O que foi removido nesta versão

A versão anterior do site era organizada em torno de um catálogo de produtos
(Charcutaria do Mar, Conservas do Lagamar, Produtos em Desenvolvimento). Essa
arquitetura foi **completamente descontinuada**:

- A página `produtos.html` foi substituída por `namazuko.html`, com escopo reduzido —
  Namazuko é uma criação autoral entre quatro frentes, não o centro do site.
- Todas as menções a Charcutaria do Mar e Conservas do Lagamar foram removidas, exceto
  notas de governança no Diário do Lagamar explicando por que certas pautas precisam ser
  redefinidas.
- `sabores.html` foi renomeado para `diario-do-lagamar.html`, unificando o nome da
  newsletter com o nome da plataforma editorial.

## Formulários

O formulário de contato tem validação básica em JavaScript e um sistema de
pré-seleção de assunto via hash da URL (ex: `contato.html#cursos` abre o formulário
já com "Cursos & Mentorias" selecionado). **Os formulários não enviam dados para
lugar nenhum ainda.** Para funcionar de fato, integre com:

- [Formspree](https://formspree.io) (mais simples)
- [Netlify Forms](https://docs.netlify.com/forms/setup/) (se hospedar na Netlify)
- Um backend próprio

## Performance

- Vídeos usam `preload="none"` e `poster` — não carregam até serem necessários.
- Imagens usam `loading="lazy"` exceto heros (`loading="eager"`).
- Animações respeitam `prefers-reduced-motion`.

## Design System

Cores, tipografia, espaçamentos e componentes estão centralizados em
`assets/css/style.css` usando CSS Custom Properties (`:root`). A v2 adiciona
componentes novos ao final do arquivo: `.frente-block`, `.escada` (escada de
valor), `.categoria-block`, `.curso-grid`/`.curso-card`, `.parceria-grid`/
`.parceria-card`, `.autoridade-placeholder`, `.ponte` (pontes entre frentes),
`.frente-compact` e `.content-pending` (marcador de conteúdo pendente).
