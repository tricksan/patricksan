# MEDIA MAP — PATRICK SAN

> **Status: Fase 1 concluída.** Todas as 8 páginas estão construídas e funcionais com placeholders de cor/gradiente no lugar das mídias reais. Esta lista é o guia definitivo para a Fase 2 (inserção de fotos e vídeos) — uma terceira pessoa pode substituir qualquer mídia colocando um arquivo com o **nome exato** listado abaixo dentro de `assets/images/` ou `assets/videos/`, sem tocar em código.

> **Nota sobre a Home — seção Cursos & Mentorias:** a Home apresenta 3 cards (Cursos Online, Cursos Presenciais, Treinamentos para Restaurantes) em vez dos 4 originalmente mapeados, para caber no grid de 3 colunas já existente (`produto-grid`) sem alterar o design system. `mentorias-destaque.jpg` ficou como opcional — Mentorias tem destaque completo na própria página `cursos-mentorias.html`.

Lista exaustiva de toda mídia (imagens e vídeos) do site, organizada por página e seção.


Convenções:
- **Formato**: horizontal (paisagem), vertical (retrato), quadrado
- **Proporção**: aspect ratio recomendado
- **Tamanho ideal**: resolução mínima recomendada (maior é sempre aceito — o site redimensiona)
- **Prioridade**: obrigatória (sem ela a página parece incompleta) / importante (reforça mas não é crítica) / opcional (nice-to-have)

Todos os arquivos seguem a convenção de nomes já estabelecida na direção de arte — uma terceira pessoa pode substituir qualquer arquivo apenas colocando um arquivo com o mesmo nome exato na pasta correspondente (`assets/images/` ou `assets/videos/`), sem tocar em código.

---

## HOME (index.html)

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `hero-video-lagamar.mp4` | 1. Hero | horizontal | 16:9 | 1920×1080, 15–25s loop | obrigatória |
| `hero-foto-lagamar-fallback.jpg` | 1. Hero (poster/fallback) | horizontal | 16:9 | 1920×1080 | obrigatória |
| `territorio-aerea-canania-ilha-comprida.jpg` | 2. Território (compacto) | vertical ou horizontal* | 3:4 | 1200×1600 | obrigatória |
| `patrick-retrato-home.jpg` **(novo)** | 3. Patrick San (apresentação) | vertical | 3:4 | 1200×1600 | obrigatória |
| `experiencias-caicaras-destaque.jpg` **(novo)** | 4a. Experiências — bloco Caiçaras | horizontal | 4:3 | 1600×1200 | obrigatória |
| `experiencias-especiais-destaque.jpg` **(novo)** | 4b. Experiências — bloco Especiais | horizontal | 4:3 | 1600×1200 | obrigatória |
| `vivencia-caicara-completa-destaque.jpg` **(novo)** | 4c. Experiências — Vivência Completa (topo, full-width) | horizontal | 16:9 ou 21:9 | 2400×1000 | obrigatória |
| `cursos-online-destaque.jpg` **(novo)** | 5a. Cursos & Mentorias — Cursos Online | horizontal | 4:3 | 1600×1200 | obrigatória |
| `cursos-presenciais-destaque.jpg` **(novo)** | 5b. Cursos & Mentorias — Presenciais | horizontal | 4:3 | 1600×1200 | obrigatória |
| `treinamentos-restaurantes-destaque.jpg` **(novo)** | 5c. Cursos & Mentorias — Treinamentos | horizontal | 4:3 | 1600×1200 | importante |
| `mentorias-destaque.jpg` **(não implementado na Fase 1 — ver nota)** | 5d. Cursos & Mentorias — Mentorias | horizontal | 4:3 | 1600×1200 | opcional |
| `namazuko-macro-01.jpg` | 6. Namazuko (compacto) | vertical | 4:5 | 1200×1500 | obrigatória |
| `parcerias-hero-territorio.jpg` **(novo)** | 7. Parcerias | horizontal | 16:9 | 1920×1080 | importante |
| `editorial-pesca-tainha-rede.jpg` | 8. Diário do Lagamar — card 1 (destaque) | horizontal | 4:3 | 1600×1200 | obrigatória |
| `editorial-bastidores-producao.jpg` | 8. Diário do Lagamar — card 2 | horizontal | 4:3 | 1200×900 | obrigatória |
| `editorial-bagre-branco-gelo.jpg` | 8. Diário do Lagamar — card 3 | horizontal | 4:3 | 1200×900 | obrigatória |

\* A imagem do território na Home pode ser recortada de `territorio-aerea-canania-ilha-comprida.jpg` (já usada em Território) — não precisa ser um arquivo exclusivo, mas se for produzida uma versão dedicada, sugerir `territorio-home-compacto.jpg` em proporção 3:4.

---

## TERRITÓRIO (pages/territorio.html)

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `territorio-video-hero.mp4` | 1. Hero com vídeo | horizontal | 16:9 | 1920×1080, 20–30s loop | obrigatória |
| `territorio-hero-canania-drone.jpg` | 1. Hero (poster/fallback) | horizontal | 16:9 | 1920×1080 | obrigatória |
| `territorio-aerea-canania-ilha-comprida.jpg` | 3. Introdução | vertical | 3:4 | 1200×1600 | obrigatória |
| `canania-centro-historico.jpg` | 4. Cananéia — split | horizontal | livre (cover) | 1600×1400 | obrigatória |
| `ilha-comprida-praia-entardecer.jpg` | 5. Ilha Comprida — split | horizontal | livre (cover) | 1600×1400 | obrigatória |
| `lagamar-mangue-raizes.jpg` | 6. O mangue — par de imagens | quadrado ou horizontal | 1:1 ou 4:3 | 1200×1200 | obrigatória |
| `lagamar-barco-canal-drone.jpg` | 6. O canal — par de imagens | quadrado ou horizontal | 1:1 ou 4:3 | 1200×1200 | obrigatória |
| `canania-comunidade-caicara.jpg` | 7. Cultura caiçara | vertical | 3:4 | 1200×1600 | obrigatória |
| `especie-bagre-branco.jpg` | 8. Espécies do estuário — card 1 | horizontal | 4:3 | 1200×900 | obrigatória |
| `especie-robalo.jpg` | 8. Espécies do estuário — card 2 | horizontal | 4:3 | 1200×900 | importante |
| `especie-tainha.jpg` | 8. Espécies do estuário — card 3 | horizontal | 4:3 | 1200×900 | importante |
| `territorio-aerea-canania-ilha-comprida.jpg` (reuso) | 9. CTA final | horizontal | livre (cover) | 1600×1000 | obrigatória |

---

## PATRICK SAN (pages/patrick-san.html)

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `patrick-retrato-principal.jpg` | 1. Hero — retrato principal | horizontal | 16:9 (cover em page-hero) | 1920×1080 | obrigatória |
| `patrick-pesca-barco.jpg` | 2. Bio (imagem sticky lateral) | vertical | 3:4 | 1200×1600 | obrigatória |
| `processo-01-pesca.jpg` | 3. Galeria de processo (item 1) | vertical | 3:4 (galeria item) | 900×1200 | obrigatória |
| `processo-02-limpeza.jpg` | 3. Galeria de processo (item 2) | vertical | 3:4 | 900×1200 | obrigatória |
| `processo-03-cura.jpg` | 3. Galeria de processo (item 3) | vertical | 3:4 | 900×1200 | obrigatória |
| `processo-04-embalagem.jpg` | 3. Galeria de processo (item 4) | vertical | 3:4 | 900×1200 | obrigatória |
| `processo-05-prato.jpg` | 3. Galeria de processo (item 5) | vertical | 3:4 | 900×1200 | obrigatória |
| `patrick-producao-charcutaria.jpg` **(reposicionar)** | 4. Split — produção/cozinha | horizontal | livre (cover) | 1600×1400 | importante |
| `patrick-cozinha-fogo.jpg` | 4. Split — produção/cozinha (par) | horizontal | livre (cover) | 1600×1400 | importante |
| `namazuko-macro-01.jpg` (reuso) | 5. Split — Namazuko resumido | vertical | 4:5 | 1200×1500 | importante |
| `patrick-lagamar-perfil.jpg` | 7. CTA final | horizontal | livre (cover) | 1600×1000 | obrigatória |

> Nota sobre `patrick-producao-charcutaria.jpg`: o nome do arquivo é um resíduo da arquitetura anterior (linha "Charcutaria do Mar"). Recomenda-se renomear para `patrick-producao-bancada.jpg` na Fase de conteúdo — funcionalmente a imagem (Patrick trabalhando em bancada de produção) continua válida e necessária, apenas o nome do arquivo carrega terminologia descontinuada.

---

## EXPERIÊNCIAS (pages/experiencias.html)

Página mais robusta — maior volume de mídia do site.

### Hero e estrutura geral

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `experiencias-video-hero-barco.mp4` | 1. Hero com vídeo | horizontal | 16:9 | 1920×1080, 20–30s loop | obrigatória |
| `experiencias-hero-barco-amanheca.jpg` | 1. Hero (poster/fallback) | horizontal | 16:9 | 1920×1080 | obrigatória |
| `experiencias-fundo-lagamar-informacoes.jpg` | 6. Informações práticas (fundo) | horizontal | 21:9 | 2400×1000 | importante |

### 3. Experiências Caiçaras — bloco de categoria

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `experiencias-caicaras-categoria-hero.jpg` **(novo)** | 3. Bloco de categoria — imagem de abertura | horizontal | 16:9 | 1920×1080 | obrigatória |

### 3a. Rota da Pesca Artesanal (herda da antiga "Vivência de Pesca")

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `pesca-tarrafa-lancamento.jpg` | 3a. Hero da experiência | vertical | 4:5 | 1200×1500 | obrigatória |
| `pesca-barco-nevoa-lagamar.jpg` | 3a. Par de imagens | quadrado | 1:1 | 1200×1200 | obrigatória |
| `pesca-pescado-dia-barco.jpg` | 3a. Par de imagens | quadrado | 1:1 | 1200×1200 | obrigatória |
| `pesca-refeicao-pescado-dia.jpg` | 3a. Refeição + retorno | vertical | 4:5 | 1200×1500 | obrigatória |
| `pesca-retorno-por-do-sol.jpg` | 3a. Refeição + retorno | vertical | 4:5 | 1200×1500 | obrigatória |
| `pesca-sequencia-01.jpg` a `pesca-sequencia-06.jpg` | 3a. Galeria sequência (6 itens) | vertical | 3:4 (galeria) | 900×1200 cada | importante |

### 3b. Pesca Submarina em Apneia — NOVA, sem mídia existente

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `apneia-hero.jpg` **(novo)** | 3b. Hero da experiência | vertical | 4:5 | 1200×1500 | obrigatória |
| `apneia-mergulho-01.jpg` **(novo)** | 3b. Par de imagens | quadrado | 1:1 | 1200×1200 | obrigatória |
| `apneia-mergulho-02.jpg` **(novo)** | 3b. Par de imagens | quadrado | 1:1 | 1200×1200 | obrigatória |
| `apneia-captura.jpg` **(novo)** | 3b. Resultado/captura | vertical | 4:5 | 1200×1500 | importante |
| `apneia-sequencia-01.jpg` a `apneia-sequencia-06.jpg` **(novo)** | 3b. Galeria sequência | vertical | 3:4 | 900×1200 cada | opcional |

### 3c. Rota das Ostras — NOVA, sem mídia existente

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `ostras-hero.jpg` **(novo)** | 3c. Hero da experiência | vertical | 4:5 | 1200×1500 | obrigatória |
| `ostras-cultivo-01.jpg` **(novo)** | 3c. Par de imagens | quadrado | 1:1 | 1200×1200 | obrigatória |
| `ostras-degustacao.jpg` **(novo)** | 3c. Par de imagens | quadrado | 1:1 | 1200×1200 | obrigatória |
| `ostras-territorio.jpg` **(novo)** | 3c. Contexto territorial | vertical | 4:5 | 1200×1500 | importante |
| `ostras-sequencia-01.jpg` a `ostras-sequencia-06.jpg` **(novo)** | 3c. Galeria sequência | vertical | 3:4 | 900×1200 cada | opcional |

### 3d. Comunidades Tradicionais — NOVA, sem mídia existente

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `comunidades-hero.jpg` **(novo)** | 3d. Hero da experiência | vertical | 4:5 | 1200×1500 | obrigatória |
| `comunidades-encontro-01.jpg` **(novo)** | 3d. Par de imagens | quadrado | 1:1 | 1200×1200 | obrigatória |
| `comunidades-saberes.jpg` **(novo)** | 3d. Par de imagens | quadrado | 1:1 | 1200×1200 | obrigatória |
| `comunidades-cotidiano.jpg` **(novo)** | 3d. Contexto | vertical | 4:5 | 1200×1500 | importante |
| `comunidades-sequencia-01.jpg` a `comunidades-sequencia-06.jpg` **(novo)** | 3d. Galeria sequência | vertical | 3:4 | 900×1200 cada | opcional |

### 3e. Enseada da Baleia — NOVA, sem mídia existente

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `enseada-baleia-hero.jpg` **(novo)** | 3e. Hero da experiência | vertical | 4:5 | 1200×1500 | obrigatória |
| `enseada-baleia-vista-01.jpg` **(novo)** | 3e. Par de imagens | quadrado | 1:1 | 1200×1200 | obrigatória |
| `enseada-baleia-vista-02.jpg` **(novo)** | 3e. Par de imagens | quadrado | 1:1 | 1200×1200 | obrigatória |
| `enseada-baleia-avistamento.jpg` **(novo)** | 3e. Momento principal (se aplicável) | vertical | 4:5 | 1200×1500 | importante |
| `enseada-baleia-sequencia-01.jpg` a `-06.jpg` **(novo)** | 3e. Galeria sequência | vertical | 3:4 | 900×1200 cada | opcional |

### 4. Experiências Especiais — bloco de categoria

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `experiencias-especiais-categoria-hero.jpg` **(novo)** | 4. Bloco de categoria — imagem de abertura | horizontal | 16:9 | 1920×1080 | obrigatória |

### 4a. Rota Gastronômica do Lagamar (herda da antiga "Omakase Caiçara")

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `omakase-mesa-posta-ambiente.jpg` | 4a. Hero da experiência | vertical | 4:5 | 1200×1500 | obrigatória |
| `omakase-primeiro-prato-servindo.jpg` | 4a. Par de imagens | quadrado | 1:1 | 1200×1200 | obrigatória |
| `omakase-ingrediente-territorio.jpg` | 4a. Par de imagens | quadrado | 1:1 | 1200×1200 | obrigatória |
| `omakase-patrick-narrando-mesa.jpg` | 4a. Narrando + galeria | vertical | 4:5 | 1200×1500 | obrigatória |
| `omakase-prato-01.jpg` a `omakase-prato-08.jpg` | 4a. Galeria de pratos (8 itens) | vertical | 3:4 | 900×1200 cada | importante |

> Nota: os nomes `omakase-*` são resíduos da nomenclatura anterior ("Omakase Caiçara"). Recomenda-se manter os arquivos como estão (renomear 12 arquivos teria custo desproporcional ao benefício) — o código apenas precisa referenciá-los sob o novo título "Rota Gastronômica do Lagamar". Caso a produção de fotos seja refeita do zero, usar prefixo `rota-gastronomica-*`.

### 5. Vivência Caiçara Completa (herda da antiga "Imersão no Território") — topo da escada, destaque máximo

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `imersao-video-tres-dias.mp4` | 5. Hero da experiência (vídeo) | horizontal | 16:9 | 1920×1080, 20–30s | obrigatória |
| `imersao-hero-lagamar-amanhecer.jpg` | 5. Hero (poster/fallback) | horizontal | 16:9 | 1920×1080 | obrigatória |
| `imersao-vista-amanhecer-hospedagem.jpg` | 5. Detalhe — vista da hospedagem | vertical | 4:5 | 1200×1500 | obrigatória |
| `imersao-visita-produtor-local.jpg` | 5. Par de imagens | vertical | 4:5 | 1200×1500 | obrigatória |
| `imersao-refeicao-comunitaria-mesa.jpg` | 5. Par de imagens | vertical | 4:5 | 1200×1500 | obrigatória |
| `imersao-fogueira-beira-lagamar.jpg` | 5. Imagem final — fogueira | horizontal | 21:9 | 2400×1000 | obrigatória |

> Nota: assim como `omakase-*`, os nomes `imersao-*` são resíduos de nomenclatura, mas o conteúdo visual continua 100% válido para "Vivência Caiçara Completa" — recomenda-se manter os arquivos.

---

## CURSOS & MENTORIAS (pages/cursos-mentorias.html) — TODA A MÍDIA É NOVA

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `cursos-hero.jpg` **(novo)** | 1. Hero | horizontal | 16:9 | 1920×1080 | obrigatória |
| `cursos-video-hero.mp4` **(novo, opcional)** | 1. Hero (vídeo alternativo) | horizontal | 16:9 | 1920×1080, 15–20s | opcional |
| `curso-sashimi-cortes.jpg` **(novo)** | 3. Cursos Online — card "Técnicas e Cortes para Sashimi" | horizontal | 4:3 | 1200×900 | obrigatória |
| `curso-sushi-pratos-quentes.jpg` **(novo)** | 3. Cursos Online — card "Sushi e Pratos Quentes" | horizontal | 4:3 | 1200×900 | obrigatória |
| `curso-maturacao-peixes.jpg` **(novo)** | 3. Cursos Online — card "Maturação de Peixes" | horizontal | 4:3 | 1200×900 | obrigatória |
| `curso-pescados-costa-brasileira.jpg` **(novo)** | 3. Cursos Online — card "Conhecimento Aplicado aos Pescados da Costa Brasileira" | horizontal | 4:3 | 1200×900 | obrigatória |
| `cursos-presenciais-ambiente.jpg` **(novo)** | 4. Cursos Presenciais | horizontal | 16:9 | 1920×1080 | obrigatória |
| `treinamentos-restaurantes-ambiente.jpg` **(novo)** | 5. Treinamentos para Restaurantes | horizontal | 16:9 | 1920×1080 | importante |
| `mentorias-ambiente.jpg` **(novo)** | 6. Mentorias | vertical ou horizontal | 4:5 ou 16:9 | 1200×1500 ou 1920×1080 | importante |
| `cursos-ponte-lagamar.jpg` **(novo)** | 7. Ponte "Da sala de aula ao Lagamar" | horizontal | 21:9 | 2400×1000 | importante |

---

## NAMAZUKO (pages/namazuko.html)

Escopo reduzido — menos itens que a antiga `produtos.html`, foco em qualidade sobre quantidade.

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `namazuko-hero.jpg` **(novo, ou reuso de namazuko-macro-01.jpg)** | 1. Hero | horizontal | 16:9 | 1920×1080 | obrigatória |
| `namazuko-embalagem.jpg` | 2. O produto — embalagem | vertical | 4:5 | 1200×1500 | obrigatória |
| `namazuko-produto-aberto.jpg` | 2. O produto — aberto | quadrado | 1:1 | 1200×1200 | obrigatória |
| `namazuko-uso-gastronomico.jpg` | 2. O produto — uso gastronômico | quadrado | 1:1 | 1200×1200 | obrigatória |
| `especie-bagre-branco.jpg` (reuso de Território) | 3. Origem territorial | horizontal | 4:3 | 1200×900 | obrigatória |
| `namazuko-processo-video.mp4` | 4. O processo | horizontal | 16:9 | 1920×1080, 60–90s | obrigatória |
| `contato-b2b-produto-cozinha-profissional.jpg` | 5. Fornecimento para restaurantes | vertical | 4:5 | 1200×1500 | importante |
| `namazuko-ponte-cursos.jpg` **(novo)** | 6. Ponte — conhecimento/experiência relacionados | horizontal | 21:9 | 2400×1000 | opcional |

---

## PARCERIAS (pages/parcerias.html) — TODA A MÍDIA É NOVA

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `parcerias-hero.jpg` **(novo)** | 1. Hero | horizontal | 16:9 | 1920×1080 | obrigatória |
| `parcerias-introducao.jpg` **(novo, opcional)** | 2. Introdução | horizontal | 21:9 | 2400×1000 | opcional |
| `parcerias-categoria-icone-*.svg` **(novo, 8 ícones)** | 3. Categorias de parceria (grid de 8) | quadrado (ícone) | 1:1 | vetorial ou 200×200px | opcional — pode ser apenas tipografia/texto inicialmente |
| `parcerias-autoridade-placeholder.jpg` **(novo, opcional)** | 5. Espaço reservado para autoridade futura | horizontal | 16:9 | 1920×1080 | opcional |

> A página de Parcerias é a que tem menor dependência de mídia fotográfica — seu conteúdo é majoritariamente textual/institucional na Fase 1. Os ícones de categoria podem ser tipográficos (sem imagem) até que haja identidade visual dedicada.

---

## DIÁRIO DO LAGAMAR (pages/diario-do-lagamar.html)

Renomeação de sabores.html — mantém os arquivos já mapeados, remove referências a "Charcutaria do Mar".

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `sabores-hero-patrick-caderno.jpg` **(renomear para `diario-hero-patrick-caderno.jpg` na Fase de conteúdo)** | 1. Hero | horizontal | 16:9 | 1920×1080 | obrigatória |
| `artigo-destaque-capa.jpg` | 2. Artigo em destaque | horizontal | 4:3 | 1600×1200 | obrigatória |
| `artigo-pesca-tainha-capa.jpg` | 3. Grid de artigos — Cultura Caiçara | vertical | 3:4 | 900×1200 | obrigatória |
| `artigo-namazuko-processo-capa.jpg` | 3. Grid de artigos — Bastidores da Produção | vertical | 3:4 | 900×1200 | obrigatória |
| `artigo-bagre-branco-capa.jpg` | 3. Grid de artigos — Espécies do Estuário | vertical | 3:4 | 900×1200 | obrigatória |
| `artigo-namazuko-tecnica-capa.jpg` **(renomeado de `artigo-cura-tecnica-capa.jpg`)** | 3. Grid de artigos — Namazuko & Técnica (nova categoria, substitui "Charcutaria do Mar") | vertical | 3:4 | 900×1200 | obrigatória |
| `artigo-comunidade-caicara-capa.jpg` | 3. Grid de artigos — Histórias de Pescadores | vertical | 3:4 | 900×1200 | obrigatória |
| `artigo-mangue-biodiversidade-capa.jpg` | 3. Grid de artigos — Território | vertical | 3:4 | 900×1200 | obrigatória |
| `artigo-receita-defumado-capa.jpg` **(reavaliar conteúdo — "defumado" remete a Charcutaria do Mar)** | 3. Grid de artigos — Gastronomia de Território | vertical | 3:4 | 900×1200 | importante — conteúdo do artigo precisa ser redefinido |
| `artigo-historia-canania-capa.jpg` | 3. Grid de artigos — Patrimônio Cultural | vertical | 3:4 | 900×1200 | obrigatória |
| `diario-textura-territorio.jpg` **(renomeado de `sabores-textura-territorio.jpg`)** | 4. Categorias editoriais (fundo decorativo) | quadrado ou horizontal | 1:1 ou 4:3 | 1200×1200 | opcional |

---

## CONTATO (pages/contato.html)

| Arquivo | Seção | Formato | Proporção | Tamanho ideal | Prioridade |
|---|---|---|---|---|---|
| `contato-hero-lagamar-entardecer.jpg` | 1. Hero | horizontal | 16:9 | 1920×1080 | obrigatória |
| `contato-imprensa-patrick-entrevista.jpg` **(avaliar se permanece — conteúdo de imprensa pode migrar para Parcerias)** | (se mantido) seção de imprensa | vertical | 4:5 | 1200×1500 | opcional |
| `territorio-aerea-canania-ilha-comprida.jpg` (reuso) | 4. Localização (mapa placeholder) | horizontal | 21:9 | 2400×1000 | obrigatória |

---

## RESUMO QUANTITATIVO DE MÍDIA

| Categoria | Já existente (reuso possível) | Novo — a produzir | Total por página |
|---|---|---|---|
| Home | 5 | 10 | 15 |
| Território | 12 (com 1 reuso interno) | 0 | 11 únicos |
| Patrick San | 10 | 0 | 10 |
| Experiências | 22 (Pesca + Omakase + Imersão) | ~30 (4 novas experiências × ~7-8 itens cada) | ~52 |
| Cursos & Mentorias | 0 | 10 | 10 |
| Namazuko | 6 | 2 | 8 |
| Parcerias | 0 | ~4 (ou 0 se só texto) | 0–4 |
| Diário do Lagamar | 10 (2 renomeados) | 0 | 10 |
| Contato | 2–3 | 0 | 2–3 |

**Maior demanda de produção de mídia: Experiências (4 novas experiências da categoria "Experiências Caiçaras")** — Pesca Submarina em Apneia, Rota das Ostras, Comunidades Tradicionais e Enseada da Baleia não têm nenhuma mídia existente e juntas representam o maior volume de produção pendente do projeto.


---

